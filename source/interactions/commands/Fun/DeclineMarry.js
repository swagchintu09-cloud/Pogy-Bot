const Command = require("../../abstract/command");

module.exports = class DeclineMarry extends Command {
  constructor(...args) {
    super(...args, {
      name: "declinemarry",
      aliases: ["dm"],
      description: "Declines a marriage proposal.",
      category: "Fun",
      usage: ["dm"],
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

    data.pendingproposal = false;
    data.proposer = null;
    data.proposedAt = null;

    await this.client.database.marryData.post(message?.author.id, data);

    return message?.reply("⚠️ You declined the marriage proposal.");
  }

  async exec({ interaction }) {
    let data = await this.client.database.marryData.get(interaction?.user.id);
    if (!data || !data.pendingproposal) {
      return interaction?.reply("⚠️ You don't have any pending proposals.");
    }

    data.pendingproposal = false;
    data.proposer = null;
    data.proposedAt = null;

    await this.client.database.marryData.post(interaction?.user.id, data);

    return interaction?.reply("⚠️ You declined the marriage proposal.");
  }
};
