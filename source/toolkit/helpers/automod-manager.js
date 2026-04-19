const { sanitizeText } = require("./moderation-security");

const RULE_PREFIX = "PogyClient Guard";

const DEFAULT_AUTOMOD = {
    enabled: false,
    logChannelId: null,
    exemptChannels: [],
    exemptRoles: [],
    action: "delete",
    timeoutDurationMs: 10 * 60 * 1000,
    massMention: {
        enabled: true,
        limit: 5,
        blockEveryone: true,
    },
    inviteLinks: {
        enabled: true,
        allowVanity: false,
    },
    externalLinks: {
        enabled: false,
    },
    caps: {
        enabled: true,
        minimumLength: 16,
        ratio: 0.7,
    },
    spam: {
        enabled: true,
        intervalMs: 8000,
        maxMessages: 6,
    },
    repeatedMessages: {
        enabled: true,
        windowMs: 120000,
        threshold: 3,
    },
};

function mergeConfig(base = {}) {
    return {
        ...DEFAULT_AUTOMOD,
        ...base,
        massMention: { ...DEFAULT_AUTOMOD.massMention, ...(base.massMention ?? {}) },
        inviteLinks: { ...DEFAULT_AUTOMOD.inviteLinks, ...(base.inviteLinks ?? {}) },
        externalLinks: { ...DEFAULT_AUTOMOD.externalLinks, ...(base.externalLinks ?? {}) },
        caps: { ...DEFAULT_AUTOMOD.caps, ...(base.caps ?? {}) },
        spam: { ...DEFAULT_AUTOMOD.spam, ...(base.spam ?? {}) },
        repeatedMessages: { ...DEFAULT_AUTOMOD.repeatedMessages, ...(base.repeatedMessages ?? {}) },
    };
}

async function getGuildAutomodConfig(client, guildId) {
    let guildProfile = await client.cache.get(`${guildId}1`);
    if (!guildProfile) {
        guildProfile = await client.database.guildData.get(guildId);
        if (guildProfile) {
            await client.cache.set(`${guildId}1`, guildProfile);
        }
    }
    return mergeConfig(guildProfile?.automod);
}

async function saveGuildAutomodConfig(client, guildId, patch) {
    const current = await getGuildAutomodConfig(client, guildId);
    const next = mergeConfig({ ...current, ...patch });
    const guildProfile = await client.database.guildData.putAutomod(guildId, next);
    if (guildProfile) {
        await client.cache.set(`${guildId}1`, guildProfile);
    }
    return next;
}

async function syncNativeRules(guild, config, actorTag) {
    if (!guild?.autoModerationRules?.fetch) return;

    const existing = await guild.autoModerationRules.fetch().catch(() => null);
    if (!existing) return;

    const managed = existing.filter((rule) => rule.name.startsWith(RULE_PREFIX));
    for (const rule of managed.values()) {
        await guild.autoModerationRules.delete(rule.id).catch(() => {});
    }

    if (!config.enabled) return;

    const rules = [];
    if (config.massMention.enabled) {
        rules.push({
            name: `${RULE_PREFIX} Mention Shield`,
            eventType: 1,
            triggerType: 5,
            triggerMetadata: {
                mentionTotalLimit: Math.max(3, Number(config.massMention.limit) || 5),
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        customMessage: "Mass mentions are blocked in this server.",
                    },
                },
            ],
            enabled: true,
            reason: sanitizeText(`Synced by ${actorTag}`, { maxLength: 140 }),
        });
    }

    if (config.inviteLinks.enabled) {
        rules.push({
            name: `${RULE_PREFIX} Invite Shield`,
            eventType: 1,
            triggerType: 1,
            triggerMetadata: {
                keywordFilter: ["discord.gg", "discord.com/invite"],
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        customMessage: "Invite links are blocked in this server.",
                    },
                },
            ],
            enabled: true,
            reason: sanitizeText(`Synced by ${actorTag}`, { maxLength: 140 }),
        });
    }

    for (const rule of rules) {
        await guild.autoModerationRules.create(rule).catch(() => {});
    }
}

module.exports = {
    DEFAULT_AUTOMOD,
    RULE_PREFIX,
    getGuildAutomodConfig,
    mergeConfig,
    saveGuildAutomodConfig,
    syncNativeRules,
};
