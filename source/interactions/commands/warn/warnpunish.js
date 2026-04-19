const Command = require("../../abstract/command");
const {
  deletePunishment,
  getPunishments,
  parseDurationHours,
  respond,
  setPunishment,
} = require("./_shared");

module.exports = class WarnPunishCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "warnpunish",
      aliases: ["warnconfig"],
      description: "Configure automatic punishments triggered by warn counts.",
      usage: ["warnpunish <count> <mute|kick|ban|off> [hours]"],
      examples: ["warnpunish 3 mute 2", "warnpunish 5 ban", "warnpunish 3 off"],
      category: "Moderation",
      userPerms: ["Administrator"],
      botPerms: ["SendMessages", "ModerateMembers", "BanMembers", "KickMembers"],
      guildOnly: true,
      cooldown: 3,
      options: [
        { type: 4, name: "count", description: "Warn count threshold", required: false },
        { type: 3, name: "action", description: "Action or off", required: false },
        { type: 4, name: "hours", description: "Mute duration in hours", required: false },
      ],
    });
  }

  async perform(target, rawCount, rawAction, rawHours) {
    if (!rawCount || !rawAction) {
      const rules = await getPunishments(target.guild.id);
      return respond(target, "Warn Punishments", [
        ...(rules.length
          ? rules.map((rule) => {
              const extra = rule.action === "mute" ? ` for ${rule.duration || 1}h` : "";
              return `**${rule.warnCount} warns** -> ${rule.action}${extra}`;
            })
          : ["No automatic warn punishments are configured."]),
      ], false);
    }

    const warnCount = Number(rawCount);
    if (!Number.isInteger(warnCount) || warnCount < 1) {
      return respond(target, "Warn Punishments", ["Warn count must be a positive whole number."]);
    }

    const action = String(rawAction).toLowerCase();
    if (!["mute", "kick", "ban", "off"].includes(action)) {
      return respond(target, "Warn Punishments", ["Use `mute`, `kick`, `ban`, or `off`."]);
    }

    if (action === "off") {
      await deletePunishment(target.guild.id, warnCount);
      return respond(target, "Warn Punishments", [
        `Removed the automatic punishment for **${warnCount}** warns.`,
      ], false);
    }

    let duration = null;
    if (action === "mute") {
      duration = parseDurationHours(rawHours);
      if (!duration) {
        return respond(target, "Warn Punishments", ["Provide a positive mute duration in hours."]);
      }
    }

    await setPunishment(target.guild.id, warnCount, action, duration);
    return respond(target, "Warn Punishments", [
      `Configured **${warnCount}** warns -> **${action}**${action === "mute" ? ` for ${duration}h` : ""}.`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args[1], args[2]);
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getInteger("count"),
      interaction.options.getString("action"),
      interaction.options.getInteger("hours")
    );
  }
};
