const Command = require("../../abstract/command");

module.exports = class AcceptMarry extends Command {
  constructor(...args) {
    super(...args, {
      name: "acceptmarry",
      aliases: ["am"],
      description: "Accepts a marriage proposal.",
      category: "Fun",
      usage: ["am"],
      userPerms: ["ViewChannel", "SendMessages"],
      botPerms: ["ViewChannel", "SendMessages"],
      cooldown: 5,
    });
  }

  async run({ message }) {
    let data = await this.client.database.marryData.get(message?.author.id);
    if (!data || !data.pendingproposal) {
      return message?.reply("⚠️ You don't have any pending proposals.");
    }

    let proposer = data.proposer ? await this.client.users.fetch(data.proposer) : null;
    if (!proposer) return message?.reply("⚠️ You don't have any pending proposals.");

    let proposerdata = await this.client.database.marryData.get(proposer.id);

    data.pendingproposal = false;
    data.proposer = null;
    data.proposedAt = null;
    data.married = true;
    data.partner = proposer.id;
    data.marriedAt = Date.now();

    proposerdata.married = true;
    proposerdata.partner = message?.author.id;
    proposerdata.marriedAt = Date.now();

    await this.client.database.marryData.post(proposer.id, proposerdata);
    await this.client.database.marryData.post(message?.author.id, data);

    return message?.reply(`🎉 Congratulations! You are now married to **${proposer.username}**!`);
  }

  async exec({ interaction }) {
    let data = await this.client.database.marryData.get(interaction?.user.id);
    if (!data || !data.pendingproposal) {
      return interaction?.reply("⚠️ You don't have any pending proposals.");
    }

    let proposer = data.proposer ? await this.client.users.fetch(data.proposer) : null;
    if (!proposer) return interaction?.reply("⚠️ You don't have any pending proposals.");

    let proposerdata = await this.client.database.marryData.get(proposer.id);

    data.pendingproposal = false;
    data.proposer = null;
    data.proposedAt = null;
    data.married = true;
    data.partner = proposer.id;
    data.marriedAt = Date.now();

    proposerdata.married = true;
    proposerdata.partner = interaction?.user.id;
    proposerdata.marriedAt = Date.now();

    await this.client.database.marryData.post(proposer.id, proposerdata);
    await this.client.database.marryData.post(interaction?.user.id, data);

    return interaction?.reply(`🎉 Congratulations! You are now married to **${proposer.username}**!`);
  }
};
