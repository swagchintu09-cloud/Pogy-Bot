const {
    ContainerBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    MessageFlags,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder,
} = require("discord.js");

const promptBank = {
    truth: [
        "What's something you've never told anyone in this server?",
        "What's the most awkward DM you've ever sent?",
        "Which habit of yours would surprise most people here?",
        "What's one thing you still overthink from last year?",
        "Who in this server gives the best first impression?",
    ],
    dare: [
        "Type your next message using only lowercase for ten minutes.",
        "Change your nickname to 'tiny menace' for five minutes.",
        "Compliment the last person who spoke in chat.",
        "Send your most used emoji three times in a row.",
        "Tell the channel your most chaotic snack combo.",
    ],
    paranoia: [
        "Who here would survive the longest in a group mystery movie?",
        "Who is most likely to secretly know more than they admit?",
        "Who in this server seems the hardest to read?",
        "Who would notice first if something felt off?",
        "Who gives off the strongest mastermind energy?",
    ],
    fact: [
        "Octopuses have three hearts and blue blood.",
        "Bananas are berries, but strawberries are not.",
        "Honey never really spoils when stored well.",
        "A day on Venus is longer than its year.",
        "Wombat poop is famously cube-shaped.",
    ],
    wyr: [
        {
            optionA: "Have the perfect memory",
            optionB: "Never need sleep again",
        },
        {
            optionA: "Be able to pause time",
            optionB: "Be able to rewind ten seconds",
        },
        {
            optionA: "Always know the truth",
            optionB: "Always be believed",
        },
        {
            optionA: "Live in a penthouse in the city",
            optionB: "Live in a mansion by the ocean",
        },
        {
            optionA: "Talk to animals",
            optionB: "Speak every human language",
        },
    ],
};

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function toLines(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    return value ? [value] : [];
}

function buildPanel({ title, lines = [], mediaUrl, footer }) {
    const panel = new ContainerBuilder();
    const body = [`# ${title}`, ...toLines(lines)].join("\n");

    panel.addTextDisplayComponents(
        new TextDisplayBuilder().setContent(body)
    );

    if (mediaUrl) {
        panel.addSeparatorComponents(
            new SeparatorBuilder()
                .setDivider(true)
                .setSpacing(SeparatorSpacingSize.Small)
        );
        panel.addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL(mediaUrl)
            )
        );
    }

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

async function sendPanel(target, panel, extra = {}) {
    const payload = {
        components: [panel, ...(extra.components ?? [])],
        flags: MessageFlags.IsComponentsV2,
        ...extra,
    };

    delete payload.components;
    payload.components = [panel, ...(extra.components ?? [])];

    if (target?.author && target?.channel?.send) {
        return target.channel.send(payload);
    }

    return target.reply(payload);
}

async function updatePanel(target, panel, extra = {}) {
    const payload = {
        components: [panel, ...(extra.components ?? [])],
        flags: MessageFlags.IsComponentsV2,
        ...extra,
    };

    delete payload.components;
    payload.components = [panel, ...(extra.components ?? [])];

    if (typeof target.editReply === "function") {
        return target.editReply(payload);
    }

    return target.update(payload);
}

async function resolveMember(client, guild, value) {
    if (!guild || !value) return null;
    if (value.user) return value;
    const id = typeof value === "string" ? value : value.id;
    if (!id) return null;
    return guild.members.cache.get(id) ?? guild.members.fetch(id).catch(() => null);
}

async function resolveUser(client, value) {
    if (!value) return null;
    if (value.username) return value;
    const id = typeof value === "string" ? value : value.id;
    if (!id) return null;
    return client.users.fetch(id).catch(() => null);
}

function buildMeter(client, percent) {
    const fill = Math.max(0, Math.min(10, Math.ceil(percent / 10)));
    const emoji = client.config?.Client?.emoji ?? {};
    const left = fill > 0 ? emoji.barleft ?? "[" : "";
    const middle = emoji.barmid ?? "=";
    const right = fill > 0 ? emoji.barright ?? "]" : "";
    const empty = emoji.emptybar ?? "·";
    const end = emoji.emptybarend ?? "";

    if (fill <= 0) {
        return `${empty.repeat(10)}${end}`;
    }

    const core = fill === 1 ? left : `${left}${middle.repeat(Math.max(fill - 2, 0))}${right}`;
    return `${core}${empty.repeat(Math.max(10 - fill, 0))}${end}`;
}

async function safeAction(factory) {
    try {
        const result = await factory();
        return result?.url ?? null;
    } catch {
        return null;
    }
}

async function fetchPrompt(fetcher, type) {
    const endpoint = {
        truth: "https://badge.pogyclientbot.xyz/truth",
        dare: "https://badge.pogyclientbot.xyz/dare",
        paranoia: "https://badge.pogyclientbot.xyz/paranoia",
        wyr: "https://badge.pogyclientbot.xyz/wyr",
    }[type];

    try {
        const response = await fetcher(endpoint, { method: "GET" });
        if (!response?.ok) throw new Error("request failed");
        const body = await response.json();

        if (type === "truth" && body?.truth) return body.truth;
        if (type === "dare" && body?.dare) return body.dare;
        if (type === "paranoia" && body?.question) return body.question;
        if (type === "wyr" && body?.optionA && body?.optionB) {
            return { optionA: body.optionA, optionB: body.optionB };
        }
    } catch {}

    return randomItem(promptBank[type]);
}

module.exports = {
    buildMeter,
    buildPanel,
    fetchPrompt,
    promptBank,
    randomItem,
    resolveMember,
    resolveUser,
    safeAction,
    sendPanel,
    updatePanel,
};
