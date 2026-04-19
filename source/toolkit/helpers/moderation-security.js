const { PermissionsBitField } = require("discord.js");

const DANGEROUS_ROLE_PERMISSIONS = [
    PermissionsBitField.Flags.Administrator,
    PermissionsBitField.Flags.ManageGuild,
    PermissionsBitField.Flags.ManageRoles,
    PermissionsBitField.Flags.ManageChannels,
    PermissionsBitField.Flags.ManageMessages,
    PermissionsBitField.Flags.ManageWebhooks,
    PermissionsBitField.Flags.BanMembers,
    PermissionsBitField.Flags.KickMembers,
    PermissionsBitField.Flags.ModerateMembers,
    PermissionsBitField.Flags.MentionEveryone,
];

const INVITE_PATTERN = /(discord\.gg\/|discord\.com\/invite\/)/i;
const LINK_PATTERN = /\bhttps?:\/\/\S+|\bwww\.\S+/i;

function sanitizeText(input, options = {}) {
    const {
        fallback = "No reason provided.",
        blockMassMentions = true,
        maxLength = 300,
    } = options;

    let value = typeof input === "string" ? input.trim() : "";
    if (!value) value = fallback;

    if (blockMassMentions) {
        value = value
            .replace(/@everyone/gi, "@\u200beveryone")
            .replace(/@here/gi, "@\u200bhere");
    }

    value = value.replace(/\s+/g, " ").trim();

    if (value.length > maxLength) {
        value = `${value.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
    }

    return value;
}

function getInvoker(target) {
    return target?.user || target?.author || null;
}

function buildAuditReason(action, actorTag, detail) {
    const safeDetail = sanitizeText(detail, {
        fallback: "No reason provided.",
        maxLength: 380,
    });

    return sanitizeText(`${action} | ${safeDetail} | By ${actorTag}`, {
        fallback: `${action} | By ${actorTag}`,
        maxLength: 500,
    });
}

function getDangerousPermissionNames(role) {
    if (!role) return [];
    const permissions = new PermissionsBitField(role.permissions);
    return permissions
        .toArray()
        .filter((permission) =>
            DANGEROUS_ROLE_PERMISSIONS.some(
                (flag) => PermissionsBitField.Flags[permission] === flag
            )
        );
}

function roleHasDangerousPermissions(role) {
    return getDangerousPermissionNames(role).length > 0;
}

function canBypassHierarchy(client, guild, member) {
    if (!member) return false;
    if (member.id === guild?.ownerId) return true;
    return client?.util?.checkOwner?.(member.id) ?? false;
}

function isTrustedExecutor(client, guild, userId, whitelist = []) {
    if (!userId) return false;
    if (client.util.checkOwner(userId)) return true;
    if (userId === guild?.ownerId) return true;
    if (userId === client.user?.id) return true;
    return Array.isArray(whitelist) && whitelist.includes(userId);
}

function getBotMember(client, guild) {
    return guild?.members?.cache?.get(client.user.id) ?? null;
}

function validateRoleOperation({
    client,
    guild,
    actorMember,
    role,
    action = "manage",
    allowDangerous = false,
}) {
    const botMember = getBotMember(client, guild);

    if (!role) {
        return { ok: false, error: "That role does not exist." };
    }

    if (role.id === guild.id) {
        return { ok: false, error: "The `@everyone` role cannot be modified with this command." };
    }

    if (role.managed) {
        return { ok: false, error: `I can't ${action} **${role.name}** because it is managed by Discord or an integration.` };
    }

    if (!canBypassHierarchy(client, guild, actorMember) && actorMember.roles.highest.comparePositionTo(role) <= 0) {
        return { ok: false, error: `You can't ${action} **${role.name}** because it is at or above your highest role.` };
    }

    if (!botMember || botMember.roles.highest.comparePositionTo(role) <= 0) {
        return { ok: false, error: `I can't ${action} **${role.name}** because it is at or above my highest role.` };
    }

    if (!allowDangerous && roleHasDangerousPermissions(role)) {
        const dangerousNames = getDangerousPermissionNames(role).join(", ");
        return {
            ok: false,
            error: `I won't ${action} **${role.name}** because it carries elevated permissions: ${dangerousNames}.`,
        };
    }

    return { ok: true, botMember };
}

function validateTargetMember({
    client,
    guild,
    actorMember,
    targetMember,
    action = "moderate",
    requireModeratable = true,
}) {
    const botMember = getBotMember(client, guild);

    if (!targetMember) {
        return { ok: false, error: "That member could not be found in this server." };
    }

    if (targetMember.id === actorMember.id) {
        return { ok: false, error: `You can't ${action} yourself.` };
    }

    if (targetMember.id === client.user.id) {
        return { ok: false, error: `You can't ${action} me.` };
    }

    if (targetMember.id === guild.ownerId) {
        return { ok: false, error: `You can't ${action} the server owner.` };
    }

    if (client.util.checkOwner(targetMember.id)) {
        return { ok: false, error: `You can't ${action} the bot owner.` };
    }

    if (!canBypassHierarchy(client, guild, actorMember) && actorMember.roles.highest.comparePositionTo(targetMember.roles.highest) <= 0) {
        return { ok: false, error: `You can't ${action} a member with an equal or higher top role than yours.` };
    }

    if (!botMember || botMember.roles.highest.comparePositionTo(targetMember.roles.highest) <= 0) {
        return { ok: false, error: `I can't ${action} that member because they are above or equal to my role hierarchy.` };
    }

    if (requireModeratable) {
        const capabilityMap = {
            ban: targetMember.bannable,
            kick: targetMember.kickable,
            timeout: targetMember.moderatable ?? targetMember.manageable,
            manage: targetMember.manageable,
        };
        const capable = capabilityMap[action] ?? targetMember.manageable;
        if (!capable) {
            return { ok: false, error: `Discord will not let me ${action} that member.` };
        }
    }

    return { ok: true, botMember };
}

function countUppercaseRatio(content) {
    const letters = [...content].filter((character) => /[a-z]/i.test(character));
    if (!letters.length) return 0;
    const uppercase = letters.filter((character) => /[A-Z]/.test(character)).length;
    return uppercase / letters.length;
}

function hasInvite(content) {
    return INVITE_PATTERN.test(content);
}

function hasLink(content) {
    return LINK_PATTERN.test(content);
}

function countVisibleMentions(message) {
    const roleMentions = message.mentions?.roles?.size ?? 0;
    const userMentions = message.mentions?.users?.size ?? 0;
    const everyoneMentions = message.mentions?.everyone ? 2 : 0;
    return roleMentions + userMentions + everyoneMentions;
}

module.exports = {
    buildAuditReason,
    countUppercaseRatio,
    countVisibleMentions,
    getInvoker,
    getDangerousPermissionNames,
    hasInvite,
    hasLink,
    isTrustedExecutor,
    roleHasDangerousPermissions,
    sanitizeText,
    validateRoleOperation,
    validateTargetMember,
};
