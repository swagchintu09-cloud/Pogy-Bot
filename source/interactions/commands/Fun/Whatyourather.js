const Command = require("../../abstract/command");
const { buildPanel, fetchPrompt, sendPanel } = require("./_panel");

module.exports = class WhatYourRather extends Command {
    constructor(...args) {
        super(...args, {
            name: "whatyourather",
            aliases: ["wyr"],
            description: "Get a random 'What You Rather' question.",
            category: "Fun",
            usage: ["whatyourather"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/VkuNgBm.png",
        });
    }

    async render(responder) {
        const prompt = await fetchPrompt(this.client.fetch.bind(this.client), "wyr");
        const panel = buildPanel({
            title: "Would You Rather",
            lines: [
                "**Option A**\n" + prompt.optionA,
                "**Option B**\n" + prompt.optionB,
            ],
            footer: "Reply in chat with A or B if you want to turn it into a quick server debate.",
        });
        return sendPanel(responder, panel);
    }

    async run({ message }) { return this.render(message); }
    async exec({ interaction }) { return this.render(interaction); }
};
