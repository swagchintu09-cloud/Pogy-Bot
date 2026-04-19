const Command = require("../../abstract/command");
const { PUNISHMENTS, canManageAntinuke, getConfig, respond, saveConfig } = require("./_shared");

module.exports = class AntiPunishment extends Command {
  constructor(...args) {
    super(...args, {
      name: "antipunishment",
      aliases: ["setantipunishment", "npunish"],
      description: "Choose how antinuke punishes malicious executors.",
      usage: ["antipunishment <ban|kick|removeroles>"],
      examples: ["antipunishment ban", "antipunishment removeroles"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["ViewChannel", "SendMessages", "Administrator"],
      cooldown: 3,
      options: [
        {
          type: 3,
          name: "mode",
          description: "Punishment mode",
          required: false,
          choices: [
            { name: "ban", value: "ban" },
            { name: "kick", value: "kick" },
            { name: "removeroles", value: "removeroles" },
          ],
        },
      ],
    });
  }

  async perform(target, mode) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Antinuke Punishment", ["Only the server owner can change antinuke punishment."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    if (!mode) {
      return respond(target, "Antinuke Punishment", [
        `Current punishment: **${config.punishment}**`,
        `Available modes: **${PUNISHMENTS.join(", ")}**`,
      ], false);
    }

    const nextMode = mode.toLowerCase();
    if (!PUNISHMENTS.includes(nextMode)) {
      return respond(target, "Antinuke Punishment", ["Use `ban`, `kick`, or `removeroles`."]);
    }

    config.punishment = nextMode;
    await saveConfig(this.client, target.guild.id, config);
    return respond(target, "Antinuke Punishment", [
      `Punishment updated to **${nextMode}**.`,
      "This mode is used whenever antinuke blocks a destructive action.",
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getString("mode"));
  }
};
