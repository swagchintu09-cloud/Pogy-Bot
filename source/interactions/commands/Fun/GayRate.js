const Command = require("../../abstract/command");
const { buildMeter, buildPanel, resolveUser, sendPanel } = require("./_panel");

module.exports = class GayRate extends Command {
    constructor(...args) {
        super(...args, {
            name: "gayrate",
            aliases: ["gayrate"],
            description: "Check how much of a gay you are.",
            category: "Fun",
            usage: ["gayrate <user>"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
            image: "https://i.imgur.com/NFAtMtr.png",
            options: [{ name: "user", description: "The user to check.", type: 6, required: false }],
        });
    }

    async render(rawUser, fallbackUser, responder) {
        const user = await resolveUser(this.client, rawUser ?? fallbackUser);
        if (!user) return responder.reply("Please provide a user to check.");
        const score = Math.floor(Math.random() * 100) + 1;
        const panel = buildPanel({
            title: "GayMeter",
            lines: ["**" + user.username + "** landed at **" + score + "%**.", buildMeter(this.client, score) + " " + score + "%"],
            mediaUrl: user.displayAvatarURL({ extension: "png", size: 512 }),
        });
        return sendPanel(responder, panel);
    }

    async run({ message, args }) { const lookup = args[0] ? await this.client.util.userQuery(args[0], message?.guild) : null; return this.render(lookup, message?.author, message); }
    async exec({ interaction }) { const member = interaction?.options.getMember("user") ?? interaction?.options.getUser("user"); return this.render(member, interaction?.user, interaction); }
};
