const Command = require("../../abstract/command");
const { buildPanel, fetchPrompt, sendPanel } = require("./_panel");

module.exports = class DareCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "dare",
            aliases: ["dare"],
            description: "Get a random dare question.",
            category: "Fun",
            usage: ["dare"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/VkuNgBm.png",
        });
    }

    async render(responder) {
        const dare = await fetchPrompt(this.client.fetch.bind(this.client), "dare");
        return sendPanel(responder, buildPanel({ title: "Dare", lines: [dare] }));
    }

    async run({ message }) { return this.render(message); }
    async exec({ interaction }) { return this.render(interaction); }
};
