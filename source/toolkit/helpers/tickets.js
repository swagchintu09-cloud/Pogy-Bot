const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  OverwriteType,
} = require("discord.js");
const { buildNoticePanel } = require("./cv2");
const { sanitizeText } = require("./moderation-security");

function defaults() {
  return {
    enabled: false,
    categoryId: null,
    logChannelId: null,
    panelChannelId: null,
    supportRoleIds: [],
    counter: 0,
  };
}

async function getTicketConfig(client, guildId) {
  const guildData = await client.database.guildData.get(guildId);
  return { ...defaults(), ...(guildData?.tickets || {}) };
}

async function saveTicketConfig(client, guildId, config) {
  return client.database.guildData.patch(guildId, { tickets: { ...defaults(), ...config } });
}

function ticketRow(disabled = false) {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("ticket:create")
      .setLabel("Open Ticket")
      .setStyle(ButtonStyle.Primary)
      .setDisabled(disabled)
  );
}

function ticketCloseRow(disabled = false) {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("ticket:close")
      .setLabel("Close Ticket")
      .setStyle(ButtonStyle.Danger)
      .setDisabled(disabled)
  );
}

function buildTicketPanel(client, guild, config) {
  return {
    components: [
      buildNoticePanel({
        title: `${client.config.Client.emoji.support} Support Tickets`,
        lines: [
          "Open a private ticket if you need help from the staff team.",
          "",
          `Support roles: ${
            config.supportRoleIds.length
              ? config.supportRoleIds.map((id) => `<@&${id}>`).join(", ")
              : "Not configured"
          }`,
        ],
      }),
      ticketRow(),
    ],
    flags: 1 << 15,
    allowedMentions: { parse: [] },
  };
}

function isTicketChannel(channel) {
  return Boolean(channel?.topic?.startsWith("ticket:"));
}

function getTicketOwnerId(channel) {
  if (!isTicketChannel(channel)) return null;
  return channel.topic.split(":")[1] || null;
}

async function createTicketChannel(interaction, client) {
  const config = await getTicketConfig(client, interaction.guild.id);
  if (!config.enabled || !config.categoryId) {
    return { error: "Ticket system is not configured yet." };
  }

  const existing = interaction.guild.channels.cache.find(
    (channel) =>
      channel.parentId === config.categoryId &&
      getTicketOwnerId(channel) === interaction.user.id
  );
  if (existing) {
    return { error: `You already have an open ticket: ${existing}` };
  }

  const nextCounter = Number(config.counter || 0) + 1;
  const overwrites = [
    {
      id: interaction.guild.roles.everyone.id,
      deny: ["ViewChannel"],
      type: OverwriteType.Role,
    },
    {
      id: interaction.user.id,
      allow: ["ViewChannel", "SendMessages", "ReadMessageHistory", "AttachFiles"],
      type: OverwriteType.Member,
    },
    {
      id: client.user.id,
      allow: ["ViewChannel", "SendMessages", "ReadMessageHistory", "ManageChannels", "ManageMessages"],
      type: OverwriteType.Member,
    },
    ...config.supportRoleIds.map((roleId) => ({
      id: roleId,
      allow: ["ViewChannel", "SendMessages", "ReadMessageHistory"],
      type: OverwriteType.Role,
    })),
  ];

  const channel = await interaction.guild.channels.create({
    name: `ticket-${String(nextCounter).padStart(4, "0")}`,
    type: ChannelType.GuildText,
    parent: config.categoryId,
    topic: `ticket:${interaction.user.id}`,
    permissionOverwrites: overwrites,
    reason: `Ticket opened by ${interaction.user.tag}`,
  });

  config.counter = nextCounter;
  await saveTicketConfig(client, interaction.guild.id, config);

  await channel.send({
    components: [
      buildNoticePanel({
        title: `${client.config.Client.emoji.support} Ticket Opened`,
        lines: [
          `${interaction.user} thanks for opening a ticket.`,
          "Explain your issue and a staff member will help you soon.",
        ],
      }),
      ticketCloseRow(),
    ],
    flags: 1 << 15,
    allowedMentions: { parse: ["users", "roles"] },
  }).catch(() => null);

  const logChannel = config.logChannelId
    ? interaction.guild.channels.cache.get(config.logChannelId)
    : null;
  if (logChannel?.isTextBased?.()) {
    await logChannel.send({
      content: `Ticket opened: ${channel} by **${sanitizeText(interaction.user.tag, { maxLength: 80 })}**`,
      allowedMentions: { parse: [] },
    }).catch(() => null);
  }

  return { channel, config };
}

async function closeTicketChannel(interaction, client) {
  if (!isTicketChannel(interaction.channel)) {
    return { error: "This is not a managed ticket channel." };
  }

  const config = await getTicketConfig(client, interaction.guild.id);
  const logChannel = config.logChannelId
    ? interaction.guild.channels.cache.get(config.logChannelId)
    : null;
  const ownerId = getTicketOwnerId(interaction.channel);

  if (logChannel?.isTextBased?.()) {
    await logChannel.send({
      content: `Ticket closed: **#${interaction.channel.name}** for <@${ownerId}> by **${sanitizeText(interaction.user.tag, { maxLength: 80 })}**`,
      allowedMentions: { parse: [] },
    }).catch(() => null);
  }

  setTimeout(() => {
    interaction.channel.delete(`Ticket closed by ${interaction.user.tag}`).catch(() => null);
  }, 3000);

  return { ok: true };
}

module.exports = {
  buildTicketPanel,
  closeTicketChannel,
  createTicketChannel,
  getTicketConfig,
  getTicketOwnerId,
  isTicketChannel,
  saveTicketConfig,
};
