const {
    ContainerBuilder,
    MessageFlags,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
} = require("discord.js");

function toLines(lines) {
    if (!lines) return [];
    if (Array.isArray(lines)) return lines.filter(Boolean);
    return [lines];
}

function buildNoticePanel({ title, lines = [], footer = null }) {
    const panel = new ContainerBuilder();
    const body = [`# ${title}`, ...toLines(lines)].join("\n");

    panel.addTextDisplayComponents(new TextDisplayBuilder().setContent(body));

    if (footer) {
        panel.addSeparatorComponents(
            new SeparatorBuilder()
                .setDivider(true)
                .setSpacing(SeparatorSpacingSize.Small)
        );
        panel.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(footer)
        );
    }

    return panel;
}

function basePayload(panel, extra = {}) {
    const payload = {
        components: [panel, ...(extra.components ?? [])],
        flags: MessageFlags.IsComponentsV2,
        allowedMentions: { parse: [], repliedUser: false },
        ...extra,
    };

    if (payload.ephemeral !== undefined) {
        payload.flags =
            (payload.flags ?? 0) |
            (payload.ephemeral ? MessageFlags.Ephemeral : 0);
        delete payload.ephemeral;
    }

    return payload;
}

async function reply(target, panel, extra = {}) {
    const payload = basePayload(panel, extra);
    if (typeof target.reply === "function") {
        if (target?.author && target?.channel?.send) {
            delete payload.ephemeral;
        }
        return target.reply(payload);
    }
    if (target?.channel?.send) {
        delete payload.ephemeral;
        return target.channel.send(payload);
    }
    throw new TypeError("Unsupported reply target.");
}

async function edit(target, panel, extra = {}) {
    const payload = basePayload(panel, extra);
    if (typeof target.editReply === "function") {
        return target.editReply(payload);
    }
    if (typeof target.update === "function") {
        return target.update(payload);
    }
    if (typeof target.edit === "function") {
        delete payload.ephemeral;
        return target.edit(payload);
    }
    throw new TypeError("Unsupported edit target.");
}

module.exports = {
    buildNoticePanel,
    edit,
    reply,
};
