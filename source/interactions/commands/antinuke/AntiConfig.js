const Command = require("../../abstract/command");
const { canManageAntinuke, getConfig, respond, summaryLines } = require("./_shared");

module.exports = class AntiConfig extends Command {
  constructor(...args) {
    super(...args, {
      name: "anticonfig",
      aliases: ["antisetup", "nukesetup"],
      description: "Show the antinuke command map and configuration snapshot.",
      usage: ["anticonfig"],
      examples: ["anticonfig"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["ViewChannel", "SendMessages"],
      cooldown: 3,
    });
  }

  async execute(target) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Antinuke Setup", ["Only the server owner can inspect antinuke setup."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    return respond(target, "Antinuke Setup", [
      ...summaryLines(config),
      "",
      "Commands:",
      "`antinuke` toggle core protection",
      "`antistatus` full overview",
      "`antipunishment` set punish action",
      "`antilogs` set the log channel",
      "`whitelist` manage trusted users",
      "`vanityguard` manage vanity protection",
    ], false);
  }

  async run({ message }) {
    return this.execute(message);
  }

  async exec({ interaction }) {
    return this.execute(interaction);
  }
};
