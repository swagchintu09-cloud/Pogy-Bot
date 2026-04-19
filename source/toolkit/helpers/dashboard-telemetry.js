const DashboardEvent = require("../../models/DashboardEvent");
const { sanitizeText } = require("./moderation-security");

module.exports = class DashboardTelemetry {
  constructor(client) {
    this.client = client;
  }

  async track(payload) {
    try {
      if (!payload?.guildId || !payload?.type || !payload?.summary) return null;

      return await DashboardEvent.create({
        guildId: payload.guildId,
        type: payload.type,
        source: payload.source || "bot",
        severity: payload.severity || "info",
        actorId: payload.actorId || null,
        actorTag: payload.actorTag ? sanitizeText(payload.actorTag, { maxLength: 80 }) : null,
        commandName: payload.commandName || null,
        channelId: payload.channelId || null,
        summary: sanitizeText(payload.summary, { maxLength: 180, fallback: "Dashboard event" }),
        details: payload.details || {}
      });
    } catch {
      return null;
    }
  }

  async command(messageOrInteraction, commandName, category) {
    const actor = messageOrInteraction.user || messageOrInteraction.author;
    return this.track({
      guildId: messageOrInteraction.guild.id,
      type: "command.executed",
      severity: "info",
      actorId: actor?.id,
      actorTag: actor?.tag || actor?.username,
      commandName,
      channelId: messageOrInteraction.channel?.id,
      summary: `${commandName} executed`,
      details: { category: category || "General" }
    });
  }

  async automod(message, violation, action) {
    return this.track({
      guildId: message.guild.id,
      type: "automod.triggered",
      severity: "warning",
      actorId: message.author.id,
      actorTag: message.author.tag,
      channelId: message.channel.id,
      summary: `${violation.rule} blocked by automod`,
      details: {
        action,
        rule: violation.rule,
        reason: violation.reason
      }
    });
  }

  async security(guildId, summary, details = {}, severity = "danger") {
    return this.track({
      guildId,
      type: "security.alert",
      severity,
      summary,
      details
    });
  }

  async music(guildId, summary, details = {}, severity = "info") {
    return this.track({
      guildId,
      type: "music.playback",
      severity,
      summary,
      details
    });
  }
};
