const Command = require("../../abstract/command");
const { Minesweeper } = require('discord-gamecord');

module.exports = class MinesweeperCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "minesweeper",
            aliases: ["minesweeper"],
            description: "Play Minesweeper.",
            category: "Fun",
            usage: ["minesweeper"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async run({ message }) {
        const Game = new Minesweeper({
            message: message,
            isSlashGame: false,
            embed: {
                title: 'Minesweeper',
                description: 'Click on the buttons to play the game.',
            },
            emojis: { flag: '🚩', mine: '💣' },
            mines: 5,
            timeoutTime: 60000,
            winMessage: 'You won the game! You successfully avoided all the mines.',
            loseMessage: 'You lost the game! Be careful next time.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        Game.startGame();
    }

    async exec({ interaction }) {
        const Game = new Minesweeper({
            interaction: interaction,
            isSlashGame: true,
            embed: {
                title: 'Minesweeper',
                description: 'Click on the buttons to play the game.',
            },
            emojis: { flag: '🚩', mine: '💣' },
            mines: 5,
            timeoutTime: 60000,
            winMessage: 'You won the game! You successfully avoided all the mines.',
            loseMessage: 'You lost the game! Be careful next time.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });

        Game.startGame();
    }
};
