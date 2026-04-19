const Command = require("../../abstract/command");

module.exports = class Divorce extends Command {
    constructor(...args) {
        super(...args, {
            name: "divorce",
            aliases: ["divorce"],
            description: "Divorce your partner.",
            category: "Fun",
            usage: ["divorce"],
            userPerms: ["ViewChannel", "SendMessages"],
            botPerms: ["ViewChannel", "SendMessages"],
            cooldown: 5,
        });
    }

    async run({ message }) {
        let data = await this.client.database.marryData.get(message?.author.id);
        if (!data.married) return message?.reply("You are not married!");

        let partner = data.partner;
        let partnerData = await this.client.database.marryData.get(partner);

        data.married = false;
        data.partner = null;
        data.marriedAt = null;

        partnerData.married = false;
        partnerData.partner = null;
        partnerData.marriedAt = null;

        await this.client.database.marryData.post(message?.author.id, data);
        await this.client.database.marryData.post(partner, partnerData);

        message?.reply("You are now divorced. 💔");
    }

    async exec({ interaction }) {
        let data = await this.client.database.marryData.get(interaction?.user.id);
        if (!data.married) return interaction?.reply("You are not married!");

        let partner = data.partner;
        let partnerData = await this.client.database.marryData.get(partner);

        data.married = false;
        data.partner = null;
        data.marriedAt = null;

        partnerData.married = false;
        partnerData.partner = null;
        partnerData.marriedAt = null;

        await this.client.database.marryData.post(interaction?.user.id, data);
        await this.client.database.marryData.post(partner, partnerData);

        interaction?.reply("You are now divorced. 💔");
    }
};
