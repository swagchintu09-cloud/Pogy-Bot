const Command = require("../../abstract/command");
const { formatCaseLine, getCase, getCasesForUser, resolveMember, respond } = require("./_shared");

module.exports = class CaseCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "case",
      aliases: ["cases"],
      description: "View a case by ID or list moderation cases for a member.",
      usage: ["case <id|user>"],
      examples: ["case 12", "case @user"],
      category: "Moderation",
      userPerms: ["ManageMessages"],
      botPerms: ["SendMessages"],
      guildOnly: true,
      cooldown: 3,
      options: [
        { type: 3, name: "query", description: "Case ID or user ID", required: true },
      ],
    });
  }

  async perform(target, query) {
    if (!query) {
      return respond(target, "Case Lookup", ["Provide a case ID or a user."]);
    }

    if (/^\d+$/.test(String(query))) {
      const caseId = Number(query);
      const found = await getCase(target.guild.id, caseId);
      if (found) {
        return respond(target, `Case #${found.caseId}`, [
          `Action: **${found.action}**`,
          `User: <@${found.userId}>`,
          `Moderator: <@${found.moderatorId}>`,
          `Reason: ${found.reason}`,
          `Created: <t:${Math.floor(new Date(found.date).getTime() / 1000)}:R>`,
        ], false);
      }
    }

    const member = await resolveMember(target, query);
    if (!member) {
      return respond(target, "Case Lookup", ["No case or member matched that query."]);
    }

    const entries = await getCasesForUser(target.guild.id, member.id);
    if (!entries.length) {
      return respond(target, "Case Lookup", [`**${member.user.tag}** has no moderation cases.`], false);
    }

    return respond(target, `Cases for ${member.user.tag}`, [
      ...entries.slice(0, 20).map(formatCaseLine),
      ...(entries.length > 20 ? [``, `Showing 20 of **${entries.length}** cases.`] : []),
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getString("query"));
  }
};
