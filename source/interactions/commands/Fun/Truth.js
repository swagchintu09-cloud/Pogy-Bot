const Command = require("../../abstract/command");
const { buildPanel, fetchPrompt, sendPanel } = require("./_panel");

module.exports = class TruthCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "truth",
            aliases: ["truth"],
            description: "Get a random truth question.",
            category: "Fun",
            usage: ["truth"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/VkuNgBm.png",
        });
    }

    async render(responder) {
        const truth = await fetchPrompt(this.client.fetch.bind(this.client), "truth");
        return sendPanel(responder, buildPanel({ title: "Truth", lines: [truth] }));
    }

    async run({ message }) { return this.render(message); }
    async exec({ interaction }) { return this.render(interaction); }
};
