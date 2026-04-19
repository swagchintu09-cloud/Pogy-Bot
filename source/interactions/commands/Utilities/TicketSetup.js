const Command = require("../../abstract/command");
const { ChannelType } = require("discord.js");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { getTicketConfig, saveTicketConfig } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketSetupCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketsetup",
      aliases: ["settickets"],
      description: "Configure the ticket category and optional log channel.",
      usage: ["ticketsetup <category> [logchannel]"],
      examples: ["ticketsetup 123456789012345678", "ticketsetup 123456789012345678 234567890123456789"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageGuild"],
      botPerms: ["ManageChannels", "SendMessages", "ViewChannel"],
      cooldown: 3,
      options: [
        { type: 7, name: "category", description: "Ticket category", required: true, channel_types: [ChannelType.GuildCategory] },
        { type: 7, name: "logs", description: "Log channel", required: false, channel_types: [ChannelType.GuildText] },
      ],
    });
  }

  async perform(target, categoryId, logChannelId = null) {
    const category = target.guild.channels.cache.get(categoryId);
    if (!category || category.type !== ChannelType.GuildCategory) {
      return respond(target, "Tickets", ["Choose a valid category channel."]);
    }

    const config = await getTicketConfig(this.client, target.guild.id);
    config.enabled = true;
    config.categoryId = category.id;
    config.logChannelId = logChannelId || config.logChannelId || null;
    await saveTicketConfig(this.client, target.guild.id, config);

    return respond(target, "Ticket Setup", [
      `Tickets are now enabled.`,
      `Category: **${category.name}**`,
      `Log channel: **${config.logChannelId ? `<#${config.logChannelId}>` : "Not set"}**`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], args[1]);
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getChannel("category")?.id,
      interaction.options.getChannel("logs")?.id || null
    );
  }
};
