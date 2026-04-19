const Command = require("../../abstract/command");
const {
  Case,
  applyWarnPunishment,
  getActor,
  getCasesForUser,
  nextCaseId,
  resolveMember,
  respond,
  sanitizeReason,
  validateWarnTarget,
} = require("./_shared");

module.exports = class WarnCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "warn",
      aliases: [],
      description: "Warn a member and create a moderation case.",
      usage: ["warn <user> <reason>"],
      examples: ["warn @user spam", "warn 123456789012345678 ignoring rules"],
      category: "Moderation",
      userPerms: ["KickMembers"],
      botPerms: ["SendMessages", "ModerateMembers"],
      guildOnly: true,
      cooldown: 3,
      options: [
        { type: 6, name: "user", description: "User to warn", required: true },
        { type: 3, name: "reason", description: "Warn reason", required: false },
      ],
    });
  }

  async perform(target, rawUser, rawReason) {
    const member = await resolveMember(target, rawUser);
    if (!member) {
      return respond(target, "Warn", ["Provide a valid server member."]);
    }

    const targetGate = validateWarnTarget(target, member);
    if (!targetGate.ok) {
      return respond(target, "Warn", [targetGate.error]);
    }

    const actor = getActor(target);
    const reason = sanitizeReason(rawReason);
    const caseId = await nextCaseId(target.guild.id);

    await Case.create({
      guildId: target.guild.id,
      caseId,
      userId: member.id,
      moderatorId: actor.id,
      action: "warn",
      reason,
    });

    const userCases = await getCasesForUser(target.guild.id, member.id);
    const warnCount = userCases.filter((entry) => entry.action === "warn").length;
    const applied = await applyWarnPunishment(this.client, member, warnCount, actor.tag);

    await member.send(
      `You were warned in ${target.guild.name}. Reason: ${reason}`
    ).catch(() => null);

    return respond(target, "Warn Issued", [
      `Case: **#${caseId}**`,
      `Member: **${member.user.tag}**`,
      `Reason: ${reason}`,
      `Total warns: **${warnCount}**`,
      applied || "No automatic punishment triggered.",
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args.slice(1).join(" "));
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getUser("user")?.id,
      interaction.options.getString("reason")
    );
  }
};
