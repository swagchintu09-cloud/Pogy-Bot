const Command = require("../../abstract/command");
const { canManageAntinuke, getConfig, respond, saveConfig } = require("./_shared");

module.exports = class Whitelist extends Command {
  constructor(...args) {
    super(...args, {
      name: "whitelist",
      aliases: ["wl"],
      description: "Manage the antinuke whitelist.",
      usage: ["whitelist <add|remove|show> [user]"],
      examples: ["whitelist show", "whitelist add @user"],
      category: "Antinuke",
      userPerms: ["ManageGuild"],
      botPerms: ["ViewChannel", "SendMessages", "ManageGuild"],
      cooldown: 3,
      options: [
        {
          type: 3,
          name: "action",
          description: "Action to perform",
          required: true,
          choices: [
            { name: "add", value: "add" },
            { name: "remove", value: "remove" },
            { name: "show", value: "show" },
          ],
        },
        {
          type: 6,
          name: "user",
          description: "User to add or remove",
          required: false,
        },
      ],
    });
  }

  async perform(target, action, rawUser) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Whitelist", ["Only the server owner can manage the antinuke whitelist."]);
    }

    const config = await getConfig(this.client, target.guild.id);
    const mode = action?.toLowerCase();
    if (!mode) {
      return respond(target, "Whitelist", ["Use `whitelist add`, `whitelist remove`, or `whitelist show`."]);
    }

    if (mode === "show") {
      return respond(target, "Antinuke Whitelist", [
        config.whitelistusers.length
          ? config.whitelistusers.map((id) => `<@${id}>`).join("\n")
          : "No users are whitelisted.",
      ], false);
    }

    const userId = /^\d+$/.test(String(rawUser || "")) ? String(rawUser) : await this.client.util.userQuery(rawUser);
    if (!userId) {
      return respond(target, "Whitelist", ["Provide a valid user."]);
    }

    if (mode === "add") {
      if (config.whitelistusers.includes(userId)) {
        return respond(target, "Whitelist", ["That user is already whitelisted."]);
      }
      if (config.whitelistusers.length >= 10) {
        return respond(target, "Whitelist", ["You can whitelist up to 10 users."]);
      }
      config.whitelistusers.push(userId);
      await saveConfig(this.client, target.guild.id, config);
      return respond(target, "Whitelist Updated", [`Added <@${userId}> to the antinuke whitelist.`], false);
    }

    if (mode === "remove") {
      if (!config.whitelistusers.includes(userId)) {
        return respond(target, "Whitelist", ["That user is not whitelisted."]);
      }
      config.whitelistusers = config.whitelistusers.filter((entry) => entry !== userId);
      await saveConfig(this.client, target.guild.id, config);
      return respond(target, "Whitelist Updated", [`Removed <@${userId}> from the antinuke whitelist.`], false);
    }

    return respond(target, "Whitelist", ["Unsupported whitelist action."]);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args[1]);
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getString("action"),
      interaction.options.getUser("user")?.id
    );
  }
};
