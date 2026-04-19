const Command = require("../../abstract/command");

module.exports = class Emojify extends Command {
    constructor(...args) {
        super(...args, {
            name: "emojify",
            aliases: ["emojify"],
            description: "Emojify a text.",
            category: "Fun",
            usage: ["emojify <text>"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            options: [
                {
                    name: "text",
                    description: "The text to emojify.",
                    type: 3,
                    required: true,
                },
            ],
        });
    }

    async run({ message, args }) {
        if (!args.length) return message?.reply("Please provide text to emojify!");
        const specialCodes = {
            '0': ':zero:', '1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:', '5': ':five:', '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:',
            '#': ':hash:', '*': ':asterisk:', '?': ':question:', '!': ':exclamation:', ' ': '   '
        };
        const emojified = args.join(' ').toLowerCase().split('').map(letter => {
            if (/[a-z]/.test(letter)) return `:regional_indicator_${letter}:`;
            return specialCodes[letter] || letter;
        }).join('');
        message?.channel.send(emojified);
    }

    async exec({ interaction }) {
        const text = interaction?.options.getString("text");
        const specialCodes = {
            '0': ':zero:', '1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:', '5': ':five:', '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:',
            '#': ':hash:', '*': ':asterisk:', '?': ':question:', '!': ':exclamation:', ' ': '   '
        };
        const emojified = text.toLowerCase().split('').map(letter => {
            if (/[a-z]/.test(letter)) return `:regional_indicator_${letter}:`;
            return specialCodes[letter] || letter;
        }).join('');
        interaction?.reply(emojified);
    }
};
