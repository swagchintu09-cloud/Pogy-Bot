const Command = require("../../abstract/command");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { buildPanel } = require("./_panel");

module.exports = class Rps extends Command {
    constructor(...args) {
        super(...args, {
            name: "rps",
            aliases: ["rps", "rockpaperscissors"],
            description: "Play rock paper scissors with the bot.",
            category: "Fun",
            usage: ["rps"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/4wMfxV1.png",
        });
    }

    async start(player, responder) {
        const choices = ["rock", "paper", "scissors"];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];
        const panel = buildPanel({ title: "Rock Paper Scissors", lines: ["Choose your move.", "I already locked mine in."] });
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId("rps:rock").setLabel("Rock").setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId("rps:paper").setLabel("Paper").setStyle(ButtonStyle.Primary),
            new ButtonBuilder().setCustomId("rps:scissors").setLabel("Scissors").setStyle(ButtonStyle.Primary)
        );
        const payload = { components: [panel, row], flags: MessageFlags.IsComponentsV2, fetchReply: true };
        const msg = responder?.author ? await responder.channel.send(payload) : await responder.reply(payload);
        const collector = msg.createMessageComponentCollector({ filter: (i) => i.user.id === player.id, time: 60000, max: 1 });

        collector.on("collect", async (i) => {
            const choice = i.customId.split(":")[1];
            let result = "I chose **" + botChoice + "**. You lost.";
            if (choice === botChoice) result = "We both chose **" + botChoice + "**. It's a tie.";
            if ((choice === "rock" && botChoice === "scissors") || (choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")) {
                result = "I chose **" + botChoice + "**. You win.";
            }
            const outcome = buildPanel({ title: "Rock Paper Scissors", lines: ["You picked **" + choice + "**.", result] });
            await i.update({ components: [outcome], flags: MessageFlags.IsComponentsV2 }).catch(() => null);
        });
    }

    async run({ message }) { return this.start(message?.author, message); }
    async exec({ interaction }) { return this.start(interaction?.user, interaction); }
};
