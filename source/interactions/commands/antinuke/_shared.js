const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { getGuildAntiNukeConfig, mergeAntiNukeConfig } = require("../../../toolkit/helpers/antinuke-manager");

const PUNISHMENTS = ["ban", "kick", "removeroles"];

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

async function getConfig(client, guildId) {
  const merged = await getGuildAntiNukeConfig(client, guildId);
  if (!merged.punishment || !PUNISHMENTS.includes(merged.punishment)) merged.punishment = "ban";
  return merged;
}

async function saveConfig(client, guildId, config) {
  const saved = await client.database.antiNukeData.post(guildId, config);
  const merged = mergeAntiNukeConfig(saved?.toObject?.() ?? saved ?? config);
  await client.cache.set(guildId, merged);
  return merged;
}

function canManageAntinuke(client, actor, guild) {
  return client.util.checkOwner(actor.id) || actor.id === guild.ownerId;
}

function summaryLines(config) {
  return [
    `Enabled: **${config.enabled ? "Yes" : "No"}**`,
    `Punishment: **${config.punishment}**`,
    `Whitelist: **${config.whitelistusers.length}** user(s)`,
    `Logs: **${config.logchannelid ? `<#${config.logchannelid}>` : "Not set"}**`,
    `Vanity Guard: **${config.antivanity ? "On" : "Off"}**`,
    `Responses: **${config.responses?.alertOnly ? "Alert only" : "Enforced"}**, lockdown **${config.responses?.lockdown ? "On" : "Off"}**, strip roles **${config.responses?.removeRoles ? "On" : "Off"}**`,
    `Thresholds: roles ${config.thresholds?.roleCreate}/${config.thresholds?.roleUpdate}/${config.thresholds?.roleDelete}, channels ${config.thresholds?.channelCreate}/${config.thresholds?.channelUpdate}/${config.thresholds?.channelDelete}, webhooks ${config.thresholds?.webhookUpdate}, bans ${config.thresholds?.bans}, kicks ${config.thresholds?.kicks}, bot adds ${config.thresholds?.botAdd}`,
    "",
    "Coverage: channels, roles, bans, kicks, webhook abuse, bot adds, dangerous role grants, mass-ping abuse, and vanity tampering.",
  ];
}

module.exports = {
  PUNISHMENTS,
  canManageAntinuke,
  getConfig,
  respond,
  saveConfig,
  summaryLines,
};
