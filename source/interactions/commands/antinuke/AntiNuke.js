const Command = require("../../abstract/command");
const { ChannelType } = require("discord.js");
const {
  canManageAntinuke,
  getConfig,
  PUNISHMENTS,
  respond,
  saveConfig,
  summaryLines,
} = require("./_shared");

module.exports = class AntiNuke extends Command {
  constructor(...args) {
    super(...args, {
      name: "antinuke",
      aliases: ["antiwizz"],
      description: "Manage the shared antinuke profile used by both the bot and dashboard.",
      usage: [
        "antinuke <enable|disable|status>",
        "antinuke punishment <ban|kick|removeroles>",
        "antinuke logs <#channel|off>",
        "antinuke vanity <enable|disable|status>"
      ],
      examples: ["antinuke enable", "antinuke punishment ban", "antinuke logs #security-logs"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["Administrator", "ViewChannel", "SendMessages"],
      cooldown: 5,
      options: [
        { type: 1, name: "enable", description: "Enable antinuke" },
        { type: 1, name: "disable", description: "Disable antinuke" },
        { type: 1, name: "status", description: "Show antinuke status" },
        {
          type: 1,
          name: "punishment",
          description: "Set the shared antinuke punishment mode",
          options: [
            {
              type: 3,
              name: "mode",
              description: "ban, kick, or removeroles",
              required: true,
              choices: [
                { name: "ban", value: "ban" },
                { name: "kick", value: "kick" },
                { name: "removeroles", value: "removeroles" },
              ],
            },
          ],
        },
        {
          type: 1,
          name: "logs",
          description: "Set or clear the shared antinuke log channel",
          options: [
            {
              type: 7,
              name: "channel",
              description: "Log channel",
              required: false,
              channel_types: [ChannelType.GuildText],
            },
            {
              type: 5,
              name: "disable",
              description: "Disable antinuke logging",
              required: false,
            },
          ],
        },
        {
          type: 1,
          name: "vanity",
          description: "Toggle shared vanity guard",
          options: [
            {
              type: 3,
              name: "mode",
              description: "enable, disable, or status",
              required: true,
              choices: [
                { name: "enable", value: "enable" },
                { name: "disable", value: "disable" },
                { name: "status", value: "status" },
              ],
            },
          ],
        },
      ],
    });
  }

  async saveAndRespond(target, config, title, lines) {
    const saved = await saveConfig(this.client, target.guild.id, config);
    return respond(target, title, [
      ...lines,
      "",
      "This profile is shared with the Zenith dashboard.",
      ...summaryLines(saved),
    ], false);
  }

  async performPunishment(target, mode) {
    const config = await getConfig(this.client, target.guild.id);
    if (!mode) {
      return respond(target, "Antinuke Punishment", [
        `Current punishment: **${config.punishment}**`,
        `Available modes: **${PUNISHMENTS.join(", ")}**`,
        "This setting is shared with the Zenith dashboard.",
      ], false);
    }

    const nextMode = mode.toLowerCase();
    if (!PUNISHMENTS.includes(nextMode)) {
      return respond(target, "Antinuke Punishment", ["Use `ban`, `kick`, or `removeroles`."]);
    }

    config.punishment = nextMode;
    return this.saveAndRespond(target, config, "Antinuke Updated", [
      `Punishment updated to **${nextMode}**.`,
    ]);
  }

  async performLogs(target, rawValue, disableFlag = false) {
    const config = await getConfig(this.client, target.guild.id);
    if (!rawValue && !disableFlag) {
      return respond(target, "Antinuke Logs", [
        `Current log channel: **${config.logchannelid ? `<#${config.logchannelid}>` : "Not set"}**`,
        "Provide a text channel or use `off` to disable logging.",
        "This setting is shared with the Zenith dashboard.",
      ], false);
    }

    if (disableFlag || String(rawValue).toLowerCase() === "off") {
      config.logchannelid = null;
      return this.saveAndRespond(target, config, "Antinuke Updated", [
        "Antinuke logging has been disabled.",
      ]);
    }

    const channelId = String(rawValue).replace(/[<#>]/g, "");
    const channel = target.guild.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
      return respond(target, "Antinuke Logs", ["Choose a valid text channel."]);
    }

    config.logchannelid = channel.id;
    return this.saveAndRespond(target, config, "Antinuke Updated", [
      `Antinuke logs will now be sent to <#${channel.id}>.`,
    ]);
  }

  async performVanity(target, action) {
    const config = await getConfig(this.client, target.guild.id);
    const mode = action?.toLowerCase() || "status";

    if (mode === "status") {
      return respond(target, "Vanity Guard", [
        `Enabled: **${config.antivanity ? "Yes" : "No"}**`,
        `Antinuke: **${config.enabled ? "Enabled" : "Disabled"}**`,
        `Log channel: **${config.logchannelid ? `<#${config.logchannelid}>` : "Not set"}**`,
        `Vanity URL present: **${target.guild.vanityURLCode ? "Yes" : "No"}**`,
        "This setting is shared with the Zenith dashboard.",
      ], false);
    }

    if (mode === "enable") {
      if (!target.guild.vanityURLCode) {
        return respond(target, "Vanity Guard", ["This server does not have a vanity URL to protect."]);
      }
      if (!config.enabled) {
        return respond(target, "Vanity Guard", ["Enable antinuke first before turning on Vanity Guard."]);
      }
      config.antivanity = true;
      return this.saveAndRespond(target, config, "Antinuke Updated", [
        "Vanity Guard has been enabled.",
      ]);
    }

    if (mode === "disable") {
      config.antivanity = false;
      config.PogyClientrole = null;
      return this.saveAndRespond(target, config, "Antinuke Updated", [
        "Vanity Guard has been disabled.",
      ]);
    }

    return respond(target, "Vanity Guard", ["Use `enable`, `disable`, or `status`."]);
  }

  async perform(target, action) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Antinuke", ["Only the server owner can manage antinuke."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    if (action === "enable" || action === "disable") {
      config.enabled = action === "enable";
      return this.saveAndRespond(target, config, "Antinuke Updated", [
        `Antinuke is now **${config.enabled ? "enabled" : "disabled"}**.`,
      ]);
    }

    return respond(target, "Antinuke Status", [
      "These settings are shared between the bot commands and the Zenith dashboard.",
      ...summaryLines(config),
    ], false);
  }

  async run({ message, args }) {
    const action = args[0]?.toLowerCase() ?? "status";
    if (action === "punishment") return this.performPunishment(message, args[1]);
    if (action === "logs") return this.performLogs(message, args[1], args[1]?.toLowerCase() === "off");
    if (action === "vanity") return this.performVanity(message, args[1]);
    return this.perform(message, action);
  }

  async exec({ interaction }) {
    const action = interaction.options.getSubcommand(false) ?? "status";
    if (action === "punishment") return this.performPunishment(interaction, interaction.options.getString("mode"));
    if (action === "logs") {
      return this.performLogs(
        interaction,
        interaction.options.getChannel("channel")?.id || null,
        interaction.options.getBoolean("disable") || false
      );
    }
    if (action === "vanity") return this.performVanity(interaction, interaction.options.getString("mode"));
    return this.perform(interaction, action);
  }
};
