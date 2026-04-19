const Command = require("../../abstract/command");
const { buildPanel, fetchPrompt, sendPanel } = require("./_panel");

module.exports = class ParanoiaCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "paranoia",
            aliases: ["paranoia"],
            description: "Get a random paranoia question.",
            category: "Fun",
            usage: ["paranoia"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async render(responder) {
        const question = await fetchPrompt(this.client.fetch.bind(this.client), "paranoia");
        return sendPanel(responder, buildPanel({ title: "Paranoia", lines: [question] }));
    }

    async run({ message }) { return this.render(message); }
    async exec({ interaction }) { return this.render(interaction); }
};
