const Command = require("../../abstract/command");
const { MatchPairs } = require('discord-gamecord');

module.exports = class MatchPairsCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "matchpairs",
            aliases: ["match"],
            description: "Play Match Pairs.",
            category: "Fun",
            usage: ["matchpairs"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async run({ message }) {
        const Game = new MatchPairs({
            message: message,
            isSlashGame: false,
            embed: {
                title: 'Match Pairs',
                description: 'Click on the buttons to match emojis with their pairs.',
            },
            timeoutTime: 60000,
            emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🍒', '🍍', '🍌'],
            winMessage: 'You won the game! You matched a total of `{questions}` pairs.',
            loseMessage: 'You lost the game! You failed to match all the pairs.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        Game.startGame();
    }

    async exec({ interaction }) {
        const Game = new MatchPairs({
            interaction: interaction,
            isSlashGame: true,
            embed: {
                title: 'Match Pairs',
                description: 'Click on the buttons to match emojis with their pairs.',
            },
            timeoutTime: 60000,
            emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🍒', '🍍', '🍌'],
            winMessage: 'You won the game! You matched a total of `{questions}` pairs.',
            loseMessage: 'You lost the game! You failed to match all the pairs.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        Game.startGame();
    }
};
