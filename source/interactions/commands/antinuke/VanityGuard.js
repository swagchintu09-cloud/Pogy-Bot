const Command = require("../../abstract/command");
const { canManageAntinuke, getConfig, respond, saveConfig } = require("./_shared");

module.exports = class VanityGuard extends Command {
  constructor(...args) {
    super(...args, {
      name: "vanityguard",
      aliases: ["antivanity"],
      description: "Protect the server vanity URL through the antinuke layer.",
      usage: ["vanityguard <enable|disable|status>"],
      examples: ["vanityguard status", "vanityguard enable"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["Administrator", "ViewChannel", "SendMessages"],
      cooldown: 5,
      options: [
        { type: 1, name: "enable", description: "Enable Vanity Guard" },
        { type: 1, name: "disable", description: "Disable Vanity Guard" },
        { type: 1, name: "status", description: "Show Vanity Guard status" },
      ],
    });
  }

  async perform(target, action) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Vanity Guard", ["Only the server owner can manage Vanity Guard."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    const mode = action?.toLowerCase() || "status";

    if (mode === "status") {
      return respond(target, "Vanity Guard", [
        `Enabled: **${config.antivanity ? "Yes" : "No"}**`,
        `Antinuke: **${config.enabled ? "Enabled" : "Disabled"}**`,
        `Log channel: **${config.logchannelid ? `<#${config.logchannelid}>` : "Not set"}**`,
        `Vanity URL present: **${target.guild.vanityURLCode ? "Yes" : "No"}**`,
      ], false);
    }

    if (mode === "enable") {
      if (!target.guild.vanityURLCode) {
        return respond(target, "Vanity Guard", ["This server does not have a vanity URL to protect."]);
      }
      if (!config.enabled) {
        return respond(target, "Vanity Guard", ["Enable antinuke first before turning on Vanity Guard."]);
      }
      if (config.antivanity) {
        return respond(target, "Vanity Guard", ["Vanity Guard is already enabled."]);
      }
      config.antivanity = true;
      await saveConfig(this.client, target.guild.id, config);
      return respond(target, "Vanity Guard", ["Vanity Guard has been enabled."], false);
    }

    if (mode === "disable") {
      if (!config.antivanity) {
        return respond(target, "Vanity Guard", ["Vanity Guard is already disabled."]);
      }
      config.antivanity = false;
      config.PogyClientrole = null;
      await saveConfig(this.client, target.guild.id, config);
      return respond(target, "Vanity Guard", ["Vanity Guard has been disabled."], false);
    }

    return respond(target, "Vanity Guard", ["Use `enable`, `disable`, or `status`."]);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getSubcommand(false) ?? "status");
  }
};
