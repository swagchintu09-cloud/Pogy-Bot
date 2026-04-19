const Command = require("../../abstract/command");
const { getCase, respond } = require("./_shared");

module.exports = class CaseRestoreCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "caserestore",
      aliases: ["restorecase"],
      description: "Mark a moderation case as addressed and remove it from records.",
      usage: ["caserestore <id>"],
      examples: ["caserestore 4"],
      category: "Moderation",
      userPerms: ["KickMembers"],
      botPerms: ["SendMessages"],
      guildOnly: true,
      cooldown: 3,
      options: [{ type: 4, name: "id", description: "Case ID", required: true }],
    });
  }

  async perform(target, rawId) {
    const caseId = Number(rawId);
    if (!Number.isInteger(caseId) || caseId < 1) {
      return respond(target, "Case Restore", ["Provide a valid case ID."]);
    }

    const found = await getCase(target.guild.id, caseId);
    if (!found) {
      return respond(target, "Case Restore", ["That case does not exist."]);
    }

    await found.deleteOne();
    return respond(target, "Case Restored", [
      `Removed case **#${caseId}** from the active moderation log.`,
      `User: <@${found.userId}>`,
      `Original action: **${found.action}**`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getInteger("id"));
  }
};
