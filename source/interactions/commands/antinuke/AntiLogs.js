const Command = require("../../abstract/command");
const { ChannelType } = require("discord.js");
const { canManageAntinuke, getConfig, respond, saveConfig } = require("./_shared");

module.exports = class AntiLogs extends Command {
  constructor(...args) {
    super(...args, {
      name: "antilogs",
      aliases: ["antinukelogs", "nukelogs"],
      description: "Set or clear the antinuke log channel.",
      usage: ["antilogs <#channel|off>"],
      examples: ["antilogs #security-logs", "antilogs off"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["ViewChannel", "SendMessages", "ManageGuild"],
      cooldown: 3,
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
    });
  }

  async perform(target, rawValue, disableFlag = false) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Antinuke Logs", ["Only the server owner can change antinuke logging."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    if (!rawValue && !disableFlag) {
      return respond(target, "Antinuke Logs", [
        `Current log channel: **${config.logchannelid ? `<#${config.logchannelid}>` : "Not set"}**`,
        "Provide a text channel or use `off` to disable logging.",
      ], false);
    }

    if (disableFlag || String(rawValue).toLowerCase() === "off") {
      config.logchannelid = null;
      await saveConfig(this.client, target.guild.id, config);
      return respond(target, "Antinuke Logs", ["Antinuke logging has been disabled."], false);
    }

    const channelId = String(rawValue).replace(/[<#>]/g, "");
    const channel = target.guild.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
      return respond(target, "Antinuke Logs", ["Choose a valid text channel."]);
    }

    config.logchannelid = channel.id;
    await saveConfig(this.client, target.guild.id, config);
    return respond(target, "Antinuke Logs", [`Antinuke logs will now be sent to <#${channel.id}>.`], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args[0]?.toLowerCase() === "off");
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getChannel("channel")?.id || null,
      interaction.options.getBoolean("disable") || false
    );
  }
};
