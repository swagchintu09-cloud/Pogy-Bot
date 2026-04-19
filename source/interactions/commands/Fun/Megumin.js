const Command = require("../../abstract/command");
const ActionsClient = require("discord-actions");
const { buildPanel, safeAction, sendPanel } = require("./_panel");

const nekoClient = new ActionsClient();

module.exports = class Megumin extends Command {
    constructor(...args) {
        super(...args, {
            name: "megumin",
            aliases: ["megumin"],
            description: "Get a random Megumin image.",
            usage: ["megumin"],
            category: "Fun",
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages", "AttachFiles"],
            cooldown: 2,
        });
    }

    async render(targetUser, responder) {
        const mediaUrl = await safeAction(() => nekoClient.sfw.megumin());
        const panel = buildPanel({
            title: "Megumin",
            lines: [
                "**" + targetUser.username + "** Megumin has entered the frame.",
                ...(mediaUrl ? [] : ["Media is unavailable right now, so here is the text version instead."]),
            ],
            mediaUrl,
        });

        return sendPanel(responder, panel);
    }

    async run({ message }) {
        return this.render(message?.author, message);
    }

    async exec({ interaction }) {
        return this.render(interaction?.user, interaction);
    }
};
