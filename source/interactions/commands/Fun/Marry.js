const Command = require("../../abstract/command");
const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    MessageFlags,
} = require("discord.js");
const {
    buildPanel,
    resolveMember,
} = require("./_panel");

module.exports = class Marry extends Command {
    constructor(...args) {
        super(...args, {
            name: "marry",
            aliases: ["marry", "marriage"],
            description: "Marry two users.",
            category: "Fun",
            usage: ["marry <user>"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 60,
            image: "https://i.imgur.com/6kXBHiq.png",
            options: [
                {
                    name: "user",
                    description: "The user you want to marry.",
                    type: 6,
                    required: true,
                },
            ],
        });
    }

    async getMarriageRecord(userId) {
        const existing = await this.client.database.marryData.get(userId);
        return {
            married: false,
            partner: null,
            marriedAt: null,
            pendingproposal: false,
            proposer: null,
            proposedAt: null,
            ...(existing ?? {}),
        };
    }

    async sendResponse(responder, payload) {
        if (responder?.author && responder?.channel?.send) {
            return responder.channel.send(payload);
        }

        return responder.reply(payload);
    }

    buildStatusPanel(requester, partnerName, marriedAt) {
        return buildPanel({
            title: "Marriage Status",
            lines: [
                "**" + requester.username + "** is married to **" + partnerName + "**.",
                "Together since <t:" + Math.floor(new Date(marriedAt).getTime() / 1000) + ":f>.",
                "Time together: **" + this.findDifference(marriedAt) + "**.",
            ],
        });
    }

    buildProposalPanel(requester, targetUser) {
        return buildPanel({
            title: "Marriage Proposal",
            lines: [
                "**" + requester.username + "** wants to marry **" + targetUser.username + "**.",
                "Use the buttons below to accept or decline the proposal.",
            ],
            footer: "This proposal expires in 60 seconds.",
        });
    }

    buildResultPanel(title, lines) {
        return buildPanel({ title, lines });
    }

    findDifference(date) {
        const difference = Date.now() - new Date(date).getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days + (days === 1 ? " day" : " days");
    }

    async showExistingMarriage(responder, requester) {
        const record = await this.getMarriageRecord(requester.id);
        const partner = record.partner
            ? await this.client.users.fetch(record.partner).catch(() => null)
            : null;
        const panel = this.buildStatusPanel(
            requester,
            partner?.username ?? "Unknown",
            record.marriedAt ?? Date.now()
        );
        return this.sendResponse(responder, {
            components: [panel],
            flags: MessageFlags.IsComponentsV2,
        });
    }

    async handleProposal(responder, requester, guild, rawTarget) {
        const member = await resolveMember(this.client, guild, rawTarget);
        if (!member) return responder.reply("Please provide a valid user.");
        if (member.id === requester.id) return responder.reply("You can't marry yourself.");
        if (member.user.bot) return responder.reply("You can't marry a bot.");

        const selfRecord = await this.getMarriageRecord(requester.id);
        if (selfRecord.married) {
            const partner = selfRecord.partner
                ? await this.client.users.fetch(selfRecord.partner).catch(() => null)
                : null;
            return responder.reply(
                "You are already married to **" + (partner?.username ?? "Unknown") + "**."
            );
        }

        const targetRecord = await this.getMarriageRecord(member.id);
        if (targetRecord.married) {
            const partner = targetRecord.partner
                ? await this.client.users.fetch(targetRecord.partner).catch(() => null)
                : null;
            return responder.reply(
                "**" + member.user.username + "** is already married to **" + (partner?.username ?? "Unknown") + "**."
            );
        }

        if (targetRecord.pendingproposal) {
            const proposer = targetRecord.proposer
                ? await this.client.users.fetch(targetRecord.proposer).catch(() => null)
                : null;
            return responder.reply(
                "**" + member.user.username + "** already has a proposal from **" + (proposer?.username ?? "Unknown") + "**."
            );
        }

        targetRecord.pendingproposal = true;
        targetRecord.proposer = requester.id;
        targetRecord.proposedAt = Date.now();
        await this.client.database.marryData.post(member.id, targetRecord);

        const proposalPanel = this.buildProposalPanel(requester, member.user);
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("marry:accept:" + requester.id + ":" + member.id)
                .setLabel("Accept")
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId("marry:decline:" + requester.id + ":" + member.id)
                .setLabel("Decline")
                .setStyle(ButtonStyle.Secondary)
        );

        const payload = {
            components: [proposalPanel, row],
            flags: MessageFlags.IsComponentsV2,
            fetchReply: true,
        };

        member.send({ components: [proposalPanel, row], flags: MessageFlags.IsComponentsV2 }).catch(() => {});
        const msg = await this.sendResponse(responder, payload);
        const collector = msg.createMessageComponentCollector({
            filter: (i) => i.user.id === member.id,
            time: 60000,
            max: 1,
        });

        collector.on("collect", async (i) => {
            const freshTarget = await this.getMarriageRecord(member.id);
            if (i.customId.startsWith("marry:accept")) {
                const freshRequester = await this.getMarriageRecord(requester.id);

                freshTarget.pendingproposal = false;
                freshTarget.proposer = null;
                freshTarget.proposedAt = null;
                freshTarget.married = true;
                freshTarget.partner = requester.id;
                freshTarget.marriedAt = Date.now();

                freshRequester.married = true;
                freshRequester.partner = member.id;
                freshRequester.marriedAt = freshTarget.marriedAt;

                await this.client.database.marryData.post(member.id, freshTarget);
                await this.client.database.marryData.post(requester.id, freshRequester);

                const result = this.buildResultPanel("Marriage Accepted", [
                    "**" + member.user.username + "** and **" + requester.username + "** are now married.",
                ]);
                await i.update({
                    components: [result],
                    flags: MessageFlags.IsComponentsV2,
                });
                return;
            }

            freshTarget.pendingproposal = false;
            freshTarget.proposer = null;
            freshTarget.proposedAt = null;
            await this.client.database.marryData.post(member.id, freshTarget);

            const declined = this.buildResultPanel("Marriage Declined", [
                "**" + member.user.username + "** declined the proposal.",
            ]);
            await i.update({
                components: [declined],
                flags: MessageFlags.IsComponentsV2,
            });
        });

        collector.on("end", async (collected) => {
            if (collected.size > 0) return;
            const freshTarget = await this.getMarriageRecord(member.id);
            if (freshTarget.pendingproposal && freshTarget.proposer === requester.id) {
                freshTarget.pendingproposal = false;
                freshTarget.proposer = null;
                freshTarget.proposedAt = null;
                await this.client.database.marryData.post(member.id, freshTarget);
            }
            const expired = this.buildResultPanel("Marriage Proposal", [
                "The proposal expired before **" + member.user.username + "** responded.",
            ]);
            await msg.edit({
                components: [expired],
                flags: MessageFlags.IsComponentsV2,
            }).catch(() => null);
        });
    }

    async run({ message, args }) {
        const record = await this.getMarriageRecord(message?.author.id);
        if (!args[0] && record.married) {
            return this.showExistingMarriage(message, message?.author);
        }

        const user = args[0] ? await this.client.util.userQuery(args[0], message?.guild) : null;
        if (!user) return message?.reply("Please provide a valid user.");
        return this.handleProposal(message, message?.author, message?.guild, user);
    }

    async exec({ interaction }) {
        const record = await this.getMarriageRecord(interaction?.user.id);
        const user = interaction?.options.getMember("user") ?? interaction?.options.getUser("user");

        if (!user && record.married) {
            return this.showExistingMarriage(interaction, interaction?.user);
        }

        if (!user) return interaction?.reply("Please provide a valid user.");
        return this.handleProposal(interaction, interaction?.user, interaction?.guild, user);
    }
};
