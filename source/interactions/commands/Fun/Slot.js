const Command = require("../../abstract/command");
const { buildPanel, sendPanel } = require("./_panel");

const icons = ["🍒", "🍋", "🍇", "🍊", "🔔", "💎"];

module.exports = class SlotsCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "slots",
            aliases: ["slot"],
            description: "Play Slots.",
            category: "Fun",
            usage: ["slots"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async render(player, responder) {
        const roll = Array.from({ length: 3 }, () => icons[Math.floor(Math.random() * icons.length)]);
        const unique = new Set(roll).size;
        const summary = unique === 1 ? "Jackpot. Clean sweep." : unique === 2 ? "Close enough to look rigged." : "No payout this round.";
        const panel = buildPanel({ title: "Slot Machine", lines: [roll.join("  "), summary, "Pulled by **" + player.username + "**."] });
        return sendPanel(responder, panel);
    }

    async run({ message }) { return this.render(message?.author, message); }
    async exec({ interaction }) { return this.render(interaction?.user, interaction); }
};
