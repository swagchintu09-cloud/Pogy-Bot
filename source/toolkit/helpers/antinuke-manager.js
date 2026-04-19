const { Collection, ChannelType, PermissionsBitField } = require("discord.js");
const { logAnti } = require("./antinukeLog");

const DEFAULT_ANTI_NUKE = {
    enabled: false,
    punishment: "ban",
    whitelistusers: [],
    logchannelid: null,
    antivanity: false,
    PogyClientrole: null,
    thresholds: {
        roleCreate: 3,
        roleUpdate: 3,
        roleDelete: 3,
        channelCreate: 3,
        channelUpdate: 3,
        channelDelete: 3,
        webhookCreate: 2,
        webhookUpdate: 2,
        bans: 3,
        kicks: 3,
        botAdd: 1,
    },
    responses: {
        lockdown: false,
        removeRoles: true,
        alertOnly: false,
    },
};

const hitWindows = new Collection();
const WINDOW_MS = 10_000;

function mergeAntiNukeConfig(base = {}) {
    return {
        ...DEFAULT_ANTI_NUKE,
        ...base,
        thresholds: { ...DEFAULT_ANTI_NUKE.thresholds, ...(base.thresholds ?? {}) },
        responses: { ...DEFAULT_ANTI_NUKE.responses, ...(base.responses ?? {}) },
        whitelistusers: Array.isArray(base.whitelistusers) ? base.whitelistusers : [],
    };
}

async function getGuildAntiNukeConfig(client, guildId) {
    let config = await client.cache.get(guildId);
    if (!config) {
        config = await client.database.antiNukeData.get(guildId);
    }

    const merged = mergeAntiNukeConfig(config?.toObject?.() ?? config ?? {});
    await client.cache.set(guildId, merged);
    return merged;
}

function isTrustedExecutor(client, guild, executorId, whitelist = []) {
    if (!executorId) return true;
    if (executorId === client.user.id) return true;
    if (client.util.checkOwner(executorId)) return true;
    if (executorId === guild.ownerId) return true;
    return whitelist.includes(executorId);
}

function registerHit(guildId, executorId, thresholdKey) {
    const now = Date.now();
    const bucketKey = `${guildId}:${executorId}:${thresholdKey}`;
    const entries = hitWindows.get(bucketKey) ?? [];
    const nextEntries = [...entries, now].filter((timestamp) => now - timestamp <= WINDOW_MS);
    hitWindows.set(bucketKey, nextEntries);
    return nextEntries.length;
}

async function applyLockdown(guild, reason) {
    const everyoneRole = guild.roles.everyone;
    const manageableChannels = guild.channels.cache.filter((channel) =>
        [
            ChannelType.GuildText,
            ChannelType.GuildAnnouncement,
            ChannelType.GuildForum,
            ChannelType.GuildVoice,
            ChannelType.GuildStageVoice,
        ].includes(channel.type) &&
        channel.manageable &&
        channel.permissionsFor(guild.members.me)?.has(PermissionsBitField.Flags.ManageChannels)
    );

    await Promise.all(
        manageableChannels.map((channel) =>
            channel.permissionOverwrites.edit(everyoneRole, {
                SendMessages: false,
                AddReactions: false,
                SendMessagesInThreads: false,
                CreatePublicThreads: false,
                CreatePrivateThreads: false,
                Connect: false,
            }, { reason }).catch(() => {})
        )
    );
}

async function applyAntiNukeViolation({
    client,
    guild,
    antiNukeData,
    executorId,
    thresholdKey,
    reason,
    summary,
    details = {},
    revert,
}) {
    const config = mergeAntiNukeConfig(antiNukeData);
    if (!config.enabled) return false;
    if (isTrustedExecutor(client, guild, executorId, config.whitelistusers)) return false;

    const threshold = Math.max(1, Number(config.thresholds?.[thresholdKey]) || 1);
    const count = registerHit(guild.id, executorId, thresholdKey);
    const triggered = count >= threshold;

    if (!triggered) {
        await logAnti(client, guild, {
            content: [
                `Anti-Nuke alert: **${summary}**`,
                `Executor: <@${executorId}> (\`${executorId}\`)`,
                `Count: **${count}/${threshold}** within 10s`,
            ].join("\n"),
            allowedMentions: { parse: [] },
        });
        return false;
    }

    if (typeof revert === "function") {
        await revert();
    }

    if (config.responses?.lockdown) {
        await applyLockdown(guild, `${reason} | Lockdown by PogyClient`);
    }

    if (config.responses?.removeRoles && config.punishment !== "removeroles") {
        await client.eventRestrict("removeroles", executorId, guild.id, `${reason} | Roles stripped`).catch(() => {});
    }

    if (!config.responses?.alertOnly) {
        await client.eventRestrict(config.punishment, executorId, guild.id, reason).catch(() => {});
    }

    await logAnti(client, guild, {
        content: [
            `Anti-Nuke blocked: **${summary}**`,
            `Executor: <@${executorId}> (\`${executorId}\`)`,
            `Threshold key: **${thresholdKey}**`,
            `Threshold met: **${count}/${threshold}**`,
            `Punishment: **${config.responses?.alertOnly ? "alert-only" : config.punishment}**`,
        ].join("\n"),
        allowedMentions: { parse: [] },
    });

    await client.dashboardTelemetry?.security(
        guild.id,
        summary,
        {
            executorId,
            thresholdKey,
            threshold,
            count,
            ...details,
        }
    );

    return true;
}

module.exports = {
    DEFAULT_ANTI_NUKE,
    applyAntiNukeViolation,
    getGuildAntiNukeConfig,
    isTrustedExecutor,
    mergeAntiNukeConfig,
};
