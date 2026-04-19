const Command = require("../../abstract/command");
const { getCase, removeCase, respond } = require("./_shared");

module.exports = class CaseDeleteCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "casedelete",
      aliases: ["delcase"],
      description: "Delete a specific moderation case by its ID.",
      usage: ["casedelete <id>"],
      examples: ["casedelete 8"],
      category: "Moderation",
      userPerms: ["ManageMessages"],
      botPerms: ["SendMessages"],
      guildOnly: true,
      cooldown: 3,
      options: [{ type: 4, name: "id", description: "Case ID", required: true }],
    });
  }

  async perform(target, rawId) {
    const caseId = Number(rawId);
    if (!Number.isInteger(caseId) || caseId < 1) {
      return respond(target, "Case Delete", ["Provide a valid case ID."]);
    }

    const found = await getCase(target.guild.id, caseId);
    if (!found) {
      return respond(target, "Case Delete", ["That case does not exist."]);
    }

    await removeCase(target.guild.id, caseId);
    return respond(target, "Case Deleted", [
      `Removed case **#${found.caseId}**.`,
      `User: <@${found.userId}>`,
      `Action: **${found.action}**`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getInteger("id"));
  }
};
