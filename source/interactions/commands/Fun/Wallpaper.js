const Command = require("../../abstract/command");
const ActionsClient = require("discord-actions");
const { buildPanel, safeAction, sendPanel } = require("./_panel");

const nekoClient = new ActionsClient();

module.exports = class Wallpaper extends Command {
    constructor(...args) {
        super(...args, {
            name: "wallpaper",
            aliases: ["wp"],
            description: "Get a random anime wallpaper.",
            usage: ["wallpaper"],
            category: "Fun",
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages", "AttachFiles"],
            cooldown: 2,
        });
    }

    async render(targetUser, responder) {
        const mediaUrl = await safeAction(() => nekoClient.sfw.wallpaper());
        const panel = buildPanel({
            title: "Wallpaper",
            lines: [
                "**" + targetUser.username + "** Fresh wallpaper drop.",
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
