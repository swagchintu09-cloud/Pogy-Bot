const Command = require("../../abstract/command");
const { getCase, respond, sanitizeReason } = require("./_shared");

module.exports = class CaseEditCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "caseedit",
      aliases: ["editcase"],
      description: "Edit the stored reason for a moderation case.",
      usage: ["caseedit <id> <reason>"],
      examples: ["caseedit 9 updated context"],
      category: "Moderation",
      userPerms: ["ManageMessages"],
      botPerms: ["SendMessages"],
      guildOnly: true,
      cooldown: 3,
      options: [
        { type: 4, name: "id", description: "Case ID", required: true },
        { type: 3, name: "reason", description: "New reason", required: true },
      ],
    });
  }

  async perform(target, rawId, rawReason) {
    const caseId = Number(rawId);
    if (!Number.isInteger(caseId) || caseId < 1) {
      return respond(target, "Case Edit", ["Provide a valid case ID."]);
    }

    const nextReason = sanitizeReason(rawReason);
    const found = await getCase(target.guild.id, caseId);
    if (!found) {
      return respond(target, "Case Edit", ["That case does not exist."]);
    }

    found.reason = nextReason;
    await found.save();

    return respond(target, "Case Updated", [
      `Case **#${found.caseId}** was updated.`,
      `User: <@${found.userId}>`,
      `New reason: ${nextReason}`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args.slice(1).join(" "));
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getInteger("id"),
      interaction.options.getString("reason")
    );
  }
};
