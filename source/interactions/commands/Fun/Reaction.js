const Command = require("../../abstract/command");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { buildPanel } = require("./_panel");

module.exports = class ReactionCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "reaction",
            aliases: ["react"],
            description: "Test your reaction time.",
            category: "Fun",
            usage: ["reaction"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async start(player, responder) {
        const intro = buildPanel({ title: "Reaction Test", lines: ["Wait for the signal.", "When the button appears, press it as fast as you can."] });
        const payload = { components: [intro], flags: MessageFlags.IsComponentsV2, fetchReply: true };
        const msg = responder?.author ? await responder.channel.send(payload) : await responder.reply(payload);
        const delay = Math.floor(Math.random() * 5000) + 2000;

        setTimeout(async () => {
            const start = Date.now();
            const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("reaction:" + player.id + ":" + start).setLabel("CLICK").setStyle(ButtonStyle.Primary));
            const live = buildPanel({ title: "Reaction Test", lines: ["Signal detected.", "Hit the button now."] });
            await msg.edit({ components: [live, row], flags: MessageFlags.IsComponentsV2 }).catch(() => null);
            const collector = msg.createMessageComponentCollector({ filter: (i) => i.user.id === player.id, time: 30000, max: 1 });
            collector.on("collect", async (i) => {
                const diff = Date.now() - start;
                const result = buildPanel({ title: "Reaction Test", lines: ["**" + player.username + "** reacted in **" + diff + "ms**."] });
                await i.update({ components: [result], flags: MessageFlags.IsComponentsV2 }).catch(() => null);
            });
        }, delay);
    }

    async run({ message }) { return this.start(message?.author, message); }
    async exec({ interaction }) { return this.start(interaction?.user, interaction); }
};
