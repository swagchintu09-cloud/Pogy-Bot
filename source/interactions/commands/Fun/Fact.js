const Command = require("../../abstract/command");
const { buildPanel, promptBank, randomItem, sendPanel } = require("./_panel");

module.exports = class Fact extends Command {
    constructor(...args) {
        super(...args, {
            name: "fact",
            aliases: ["fact"],
            description: "Provides a random fact.",
            usage: ["fact"],
            category: "Fun",
            cooldown: 2,
            image: "https://i.imgur.com/uiEO0pM.png",
        });
    }

    async render(responder) {
        return sendPanel(responder, buildPanel({ title: "Fact", lines: [randomItem(promptBank.fact)] }));
    }

    async run({ message }) { return this.render(message); }
    async exec({ interaction }) { return this.render(interaction); }
};
