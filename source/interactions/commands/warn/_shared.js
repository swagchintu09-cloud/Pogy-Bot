const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const {
  buildAuditReason,
  sanitizeText,
  validateTargetMember,
} = require("../../../toolkit/helpers/moderation-security");
const Case = require("../../../models/Case");
const WarnPunish = require("../../../models/WarnPunish");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

function getActor(target) {
  return target.user || target.author;
}

function getMember(target) {
  return target.member;
}

async function resolveMember(target, raw) {
  if (!raw) return null;
  const mentionId = await target.client.util.userQuery(String(raw));
  const userId = mentionId || String(raw).replace(/[<@!>]/g, "");
  if (!/^\d+$/.test(userId)) return null;
  return target.guild.members.fetch(userId).catch(() => null);
}

async function nextCaseId(guildId) {
  const latest = await Case.findOne({ guildId }).sort({ caseId: -1 }).lean();
  return (latest?.caseId || 0) + 1;
}

async function getCasesForUser(guildId, userId) {
  return Case.find({ guildId, userId }).sort({ caseId: 1 });
}

async function getCase(guildId, caseId) {
  return Case.findOne({ guildId, caseId });
}

async function removeCase(guildId, caseId) {
  return Case.findOneAndDelete({ guildId, caseId });
}

async function clearUserCases(guildId, userId) {
  return Case.deleteMany({ guildId, userId });
}

async function getPunishments(guildId) {
  return WarnPunish.find({ guildId }).sort({ warnCount: 1 }).lean();
}

async function getPunishment(guildId, warnCount) {
  return WarnPunish.findOne({ guildId, warnCount });
}

async function setPunishment(guildId, warnCount, action, duration) {
  return WarnPunish.findOneAndUpdate(
    { guildId, warnCount },
    { action, duration: duration ?? null },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
}

async function deletePunishment(guildId, warnCount) {
  return WarnPunish.findOneAndDelete({ guildId, warnCount });
}

function formatCaseLine(entry) {
  return `\`#${entry.caseId}\` **${entry.action}**  ${entry.reason}`;
}

function parseDurationHours(raw) {
  const value = Number(raw);
  if (!Number.isFinite(value) || value <= 0) return null;
  return value;
}

async function applyWarnPunishment(client, targetMember, warnCount, actorTag) {
  const punishment = await getPunishment(targetMember.guild.id, warnCount);
  if (!punishment) {
    return null;
  }

  const auditReason = buildAuditReason(
    "Warn punishment",
    actorTag,
    `${warnCount} warns -> ${punishment.action}`
  );

  if (punishment.action === "mute") {
    const durationHours = parseDurationHours(punishment.duration) || 1;
    await targetMember.timeout(durationHours * 60 * 60 * 1000, auditReason).catch(() => null);
    return `Timeout for **${durationHours}h** applied automatically.`;
  }

  if (punishment.action === "kick") {
    await targetMember.kick(auditReason).catch(() => null);
    return "Kick applied automatically.";
  }

  if (punishment.action === "ban") {
    await targetMember.ban({ deleteMessageSeconds: 0, reason: auditReason }).catch(() => null);
    return "Ban applied automatically.";
  }

  return null;
}

function validateWarnTarget(target, targetMember) {
  return validateTargetMember({
    client: target.client,
    guild: target.guild,
    actorMember: getMember(target),
    targetMember,
    action: "manage",
    requireModeratable: false,
  });
}

function sanitizeReason(input) {
  return sanitizeText(input, {
    fallback: "No reason provided.",
    maxLength: 300,
  });
}

module.exports = {
  Case,
  WarnPunish,
  applyWarnPunishment,
  clearUserCases,
  deletePunishment,
  formatCaseLine,
  getActor,
  getCase,
  getCasesForUser,
  getMember,
  getPunishments,
  nextCaseId,
  parseDurationHours,
  removeCase,
  resolveMember,
  respond,
  sanitizeReason,
  setPunishment,
  validateWarnTarget,
};
