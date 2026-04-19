const Command = require("../../abstract/command");
const { TicTacToe } = require('discord-gamecord');
const { resolveMember } = require("./_panel");

module.exports = class TicTacToeCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "tictactoe",
            aliases: ["ttt"],
            description: "Play TicTacToe with another user.",
            category: "Fun",
            usage: ["tictactoe <user>"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            options: [
                {
                    name: "user",
                    description: "The user to play with.",
                    type: 6,
                    required: true,
                },
            ],
        });
    }

    async run({ message, args }) {
        let user = args[0] ? await this.client.util.userQuery(args[0]) : null;
        if (!user) return message?.reply("Please provide a user to play with!");
        let member = await resolveMember(this.client, message?.guild, user);
        if (!member) return message?.reply("Please provide a valid user!");

        const Game = new TicTacToe({
            message: message,
            isSlashGame: false,
            opponent: member.user,
            embed: {
                title: 'Tic Tac Toe',
                statusTitle: 'Status',
                overTitle: 'Game Over'
            },
            emojis: { xButton: '❌', oButton: '⭕', blankButton: '➖' },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game unpaid! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
        });

        Game.startGame();
    }

    async exec({ interaction }) {
        let user = interaction?.options.getMember("user") ?? interaction?.options.getUser("user");
        let member = await resolveMember(this.client, interaction?.guild, user);
        if (!member) return interaction?.reply("Please provide a valid user!");

        const Game = new TicTacToe({
            interaction: interaction,
            isSlashGame: true,
            opponent: member.user,
            embed: {
                title: 'Tic Tac Toe',
                statusTitle: 'Status',
                overTitle: 'Game Over'
            },
            emojis: { xButton: '❌', oButton: '⭕', blankButton: '➖' },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game unpaid! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
        });

        Game.startGame();
    }
};
