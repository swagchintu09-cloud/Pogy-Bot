const Command = require("../../abstract/command");
const ActionsClient = require("discord-actions");
const { buildPanel, resolveMember, safeAction, sendPanel } = require("./_panel");

const nekoClient = new ActionsClient();

module.exports = class Poke extends Command {
    constructor(...args) {
        super(...args, {
            name: "poke",
            aliases: ["poke"],
            description: "Poke a user.",
            usage: ["poke <user>"],
            category: "Fun",
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages", "AttachFiles"],
            cooldown: 2,
            
            options: [
                {
                    name: "user",
                    description: "The user to poke.",
                    type: 6,
                    required: true,
                },
            ],
        });
    }

    async render(actor, guild, rawUser, responder) {
        const member = await resolveMember(this.client, guild, rawUser);
        if (!member) {
            return responder.reply("Please provide a valid user.");
        }
        
        
        const mediaUrl = await safeAction(() => nekoClient.sfw.poke());
        const panel = buildPanel({
            title: "Poke",
            lines: [
                "**" + actor.username + "** pokes **" + member.user.username + "**.",
                ...(mediaUrl ? [] : ["Media is unavailable right now, so here is the text version instead."]),
            ],
            mediaUrl,
        });

        return sendPanel(responder, panel);
    }

    async run({ message, args }) {
        const lookup = args[0] ? await this.client.util.userQuery(args[0], message?.guild) : null;
        if (!lookup) {
            return message?.reply("Please provide a user to poke!");
        }

        return this.render(message?.author, message?.guild, lookup, message);
    }

    async exec({ interaction }) {
        const user = interaction?.options.getMember("user") ?? interaction?.options.getUser("user");
        if (!user) {
            return interaction?.reply("Please provide a user to poke!");
        }

        return this.render(interaction?.user, interaction?.guild, user, interaction);
    }
};
