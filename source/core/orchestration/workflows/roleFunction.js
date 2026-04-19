const { buildNoticePanel, edit, reply } = require("../../../toolkit/helpers/cv2");
const {
    buildAuditReason,
    getInvoker,
    sanitizeText,
    validateRoleOperation,
    validateTargetMember,
} = require("../../../toolkit/helpers/moderation-security");

module.exports = class RoleFunction {
    constructor(client) {
        this.client = client;
        this.inProcess = new Set();
    }

    isInteraction(context) {
        return Boolean(context?.isChatInputCommand || context?.commandId);
    }

    async send(context, title, lines, payload = {}) {
        return reply(context, buildNoticePanel({ title, lines }), payload);
    }

    async update(context, title, lines, payload = {}) {
        return edit(context, buildNoticePanel({ title, lines }), payload);
    }

    getTargets(guild, role, scope = "all") {
        const members = guild?.members?.cache ?? new Map();
        return members.filter((member) => {
            if (!member || member.roles.cache.has(role.id)) return false;
            if (scope === "human") return !member.user.bot;
            if (scope === "bot") return member.user.bot;
            return true;
        });
    }

    hasPartialCache(guild) {
        return (guild?.members?.cache?.size ?? 0) < (guild?.memberCount ?? 0);
    }

    async toggleMemberRole(context, targetMember, role, mode = "toggle") {
        const roleGate = validateRoleOperation({
            client: this.client,
            guild: context.guild,
            actorMember: context.member,
            role,
            action: mode === "remove" ? "remove" : "assign",
        });
        if (!roleGate.ok) {
            return this.send(context, "Role Security", [roleGate.error], { ephemeral: true });
        }

        const targetGate = validateTargetMember({
            client: this.client,
            guild: context.guild,
            actorMember: context.member,
            targetMember,
            action: "manage",
            requireModeratable: false,
        });
        if (!targetGate.ok) {
            return this.send(context, "Role Security", [targetGate.error], { ephemeral: true });
        }

        const alreadyHasRole = targetMember.roles.cache.has(role.id);
        const shouldRemove = mode === "remove" || (mode === "toggle" && alreadyHasRole);
        if (shouldRemove && !alreadyHasRole) {
            return this.send(context, "Role Security", [
                `**${targetMember.user.tag}** does not currently have **${role.name}**.`,
            ], { ephemeral: true });
        }

        const auditReason = buildAuditReason(
            shouldRemove ? "Role remove" : "Role add",
            getInvoker(context)?.username || "Unknown User",
            `${role.name} -> ${targetMember.user.tag}`
        );

        try {
            if (shouldRemove) {
                await targetMember.roles.remove(role.id, auditReason);
            } else {
                await targetMember.roles.add(role.id, auditReason);
            }

            return this.send(context, "Role Updated", [
                `${shouldRemove ? "Removed" : "Added"} **${role.name}** ${shouldRemove ? "from" : "to"} **${targetMember.user.tag}**.`,
            ], { ephemeral: true });
        } catch (error) {
            return this.send(context, "Role Security", [
                sanitizeText(error?.message, { fallback: "Discord rejected that role update.", maxLength: 220 }),
            ], { ephemeral: true });
        }
    }

    async assignBulk(context, role, scope = "all") {
        const guildKey = context.guild.id;
        if (this.inProcess.has(guildKey)) {
            return this.send(context, "Role Security", [
                "A bulk role update is already running for this server. Please wait for it to finish.",
            ], { ephemeral: true });
        }

        const roleGate = validateRoleOperation({
            client: this.client,
            guild: context.guild,
            actorMember: context.member,
            role,
            action: "bulk-assign",
        });
        if (!roleGate.ok) {
            return this.send(context, "Role Security", [roleGate.error], { ephemeral: true });
        }

        const targets = this.getTargets(context.guild, role, scope);
        if (!targets.size) {
            const scopeLabel = scope === "all" ? "members" : scope === "human" ? "human members" : "bots";
            return this.send(context, "Bulk Roles", [
                this.hasPartialCache(context.guild)
                    ? `No cached ${scopeLabel} were eligible for **${role.name}**. Full member scans are intentionally disabled to avoid gateway abuse.`
                    : `No ${scopeLabel} need **${role.name}** right now.`,
            ], { ephemeral: true });
        }

        this.inProcess.add(guildKey);
        const startReply = await this.send(context, "Bulk Roles", [
            `Starting a guarded bulk assignment of **${role.name}** to **${targets.size}** cached ${scope}.`,
        ], { ephemeral: true });

        let success = 0;
        let failed = 0;
        const auditReason = buildAuditReason(
            "Bulk role add",
            getInvoker(context)?.username || "Unknown User",
            `${role.name} (${scope})`
        );

        for (const member of targets.values()) {
            const targetGate = validateTargetMember({
                client: this.client,
                guild: context.guild,
                actorMember: context.member,
                targetMember: member,
                action: "manage",
                requireModeratable: false,
            });
            if (!targetGate.ok) {
                failed += 1;
                continue;
            }

            try {
                await member.roles.add(role.id, auditReason);
                success += 1;
            } catch {
                failed += 1;
            }
        }

        this.inProcess.delete(guildKey);
        const finisher = this.isInteraction(context) ? context : startReply;

        return this.update(finisher, "Bulk Roles", [
            `Bulk role assignment finished for **${role.name}**.`,
            `Succeeded: **${success}**`,
            `Skipped/Failed: **${failed}**`,
            this.hasPartialCache(context.guild)
                ? "Only cached members were processed to avoid gateway chunk rate limits."
                : null,
        ], { ephemeral: true });
    }
};
