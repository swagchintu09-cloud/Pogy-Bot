const Command = require("../../abstract/command");
const ActionsClient = require("discord-actions");
const { buildPanel, safeAction, sendPanel } = require("./_panel");

const nekoClient = new ActionsClient();

module.exports = class Cry extends Command {
    constructor(...args) {
        super(...args, {
            name: "cry",
            aliases: ["cry"],
            description: "Cry.",
            usage: ["cry"],
            category: "Fun",
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages", "AttachFiles"],
            cooldown: 2,
        });
    }

    async render(targetUser, responder) {
        const mediaUrl = await safeAction(() => nekoClient.sfw.cry());
        const panel = buildPanel({
            title: "Cry",
            lines: [
                "**" + targetUser.username + "** is crying.",
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
