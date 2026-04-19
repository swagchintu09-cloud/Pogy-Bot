const Command = require("../../abstract/command");
const {
    buildMeter,
    buildPanel,
    randomItem,
    resolveMember,
    resolveUser,
    sendPanel,
} = require("./_panel");

const transformHandlers = {
    reverse: (text) => text.split("").reverse().join(""),
    uppercase: (text) => text.toUpperCase(),
    lowercase: (text) => text.toLowerCase(),
    swapcase: (text) =>
        text
            .split("")
            .map((character) => {
                if (character === character.toUpperCase()) {
                    return character.toLowerCase();
                }
                return character.toUpperCase();
            })
            .join(""),
    alternatetext: (text) =>
        text
            .split("")
            .map((character, index) =>
                index % 2 === 0
                    ? character.toLowerCase()
                    : character.toUpperCase()
            )
            .join(""),
    claptext: (text) =>
        text
            .split(/\s+/)
            .filter(Boolean)
            .join(" * "),
    dottext: (text) =>
        text
            .split(/\s+/)
            .filter(Boolean)
            .join(" . "),
    spacedtext: (text) => text.split("").join(" "),
    boxtext: (text) =>
        text
            .split("")
            .map((character) => "[" + character + "]")
            .join(" "),
    mocktext: (text) =>
        text
            .split("")
            .map((character, index) =>
                index % 2 === 0
                    ? character.toLowerCase()
                    : character.toUpperCase()
            )
            .join(""),
    spoilertext: (text) =>
        text
            .split("")
            .map((character) => "||" + character + "||")
            .join(""),
    slugtext: (text) =>
        text
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .join("-"),
    mirrorwords: (text) =>
        text
            .trim()
            .split(/\s+/)
            .reverse()
            .join(" "),
    vowelspam: (text) =>
        text.replace(/[aeiou]/gi, (match) => match.repeat(3)),
    squishtext: (text) => text.replace(/\s+/g, ""),
    stretchtext: (text) =>
        text
            .split("")
            .join("   "),
    chanttext: (text) =>
        [text, text.toUpperCase(), text + "!"].join(" / "),
    glitchtext: (text) =>
        text
            .split("")
            .map((character, index) => {
                if (character === " ") return character;
                if (index % 3 === 0) return character.toUpperCase() + "!";
                if (index % 3 === 1) return character.toLowerCase() + "?";
                return character;
            })
            .join(""),
    blockcaps: (text) =>
        text
            .toUpperCase()
            .split("")
            .map((character) =>
                character === " " ? "   " : character + " "
            )
            .join(""),
    titleize: (text) =>
        text
            .toLowerCase()
            .replace(/\b\w/g, (match) => match.toUpperCase()),
    sentencecase: (text) => {
        const lowered = text.toLowerCase();
        return lowered.charAt(0).toUpperCase() + lowered.slice(1);
    },
    wavecase: (text) =>
        text
            .split("")
            .map((character, index) =>
                Math.floor(index / 2) % 2 === 0
                    ? character.toUpperCase()
                    : character.toLowerCase()
            )
            .join(""),
};

function makeOptions(definition) {
    if (definition.options) return definition.options;

    if (definition.mode === "target_action") {
        return [
            {
                name: "user",
                description: definition.targetDescription || "The user to target.",
                type: 6,
                required: true,
            },
        ];
    }

    if (definition.mode === "rating") {
        return [
            {
                name: "user",
                description: "The user to check.",
                type: 6,
                required: false,
            },
        ];
    }

    if (definition.mode === "transform") {
        return [
            {
                name: "text",
                description: "The text to transform.",
                type: 3,
                required: true,
            },
        ];
    }

    return null;
}

function replaceTokens(template, tokens) {
    return template.replace(/\{(\w+)\}/g, (_, key) => tokens[key] ?? "");
}

function createGeneratedFunCommand(definition) {
    return class GeneratedFunCommand extends Command {
        constructor(...args) {
            const exampleUsage = (definition.usage || [definition.name])[0];
            super(...args, {
                name: definition.name,
                aliases: definition.aliases || [definition.name],
                description: definition.description,
                category: "Fun",
                usage: definition.usage || [definition.name],
                examples:
                    definition.examples ||
                    [exampleUsage],
                userPerms: ["ViewChannel", "SendMessages"],
                botPerms: ["ViewChannel", "SendMessages"],
                cooldown: definition.cooldown ?? 3,
                slash: false,
                options: makeOptions(definition),
            });
            this.definition = definition;
            this.funGroup = definition.group || definition.mode || "general";
        }

        async run({ message, args }) {
            return this.execute({
                responder: message,
                author: message?.author,
                guild: message?.guild,
                args: args ?? [],
                interaction: null,
            });
        }

        async exec({ interaction }) {
            return this.execute({
                responder: interaction,
                author: interaction?.user,
                guild: interaction?.guild,
                args: [],
                interaction,
            });
        }

        async execute(context) {
            switch (this.definition.mode) {
                case "target_action":
                    return this.executeTargetAction(context);
                case "rating":
                    return this.executeRating(context);
                case "prompt":
                    return this.executePrompt(context);
                case "randomizer":
                    return this.executeRandomizer(context);
                case "transform":
                    return this.executeTransform(context);
                default:
                    return context.responder?.reply?.("This command is not configured correctly.");
            }
        }

        async executeTargetAction({ responder, author, guild, args, interaction }) {
            const rawUser = interaction
                ? interaction.options.getMember("user") ?? interaction.options.getUser("user")
                : args[0]
                    ? await this.client.util.userQuery(args[0], guild)
                    : null;

            if (!rawUser) {
                return responder?.reply?.(this.definition.missingTargetMessage || "Please provide a valid user.");
            }

            const target = await resolveMember(this.client, guild, rawUser);
            if (!target) {
                return responder?.reply?.("Please provide a valid user.");
            }

            if (this.definition.blockSelf && target.id === author.id) {
                return responder?.reply?.(this.definition.blockSelfMessage || "You cannot use this on yourself.");
            }

            if (this.definition.blockBots && target.user.bot) {
                return responder?.reply?.(this.definition.blockBotMessage || "You cannot use this on bots.");
            }

            const line = replaceTokens(
                randomItem(this.definition.templates),
                {
                    actor: author.username,
                    target: target.user.username,
                }
            );

            const panel = buildPanel({
                title: this.definition.title,
                lines: [line],
                footer: this.definition.footer || null,
            });

            return sendPanel(responder, panel);
        }

        async executeRating({ responder, author, args, interaction }) {
            const rawUser = interaction
                ? interaction.options.getMember("user") ?? interaction.options.getUser("user")
                : args[0]
                    ? await this.client.util.userQuery(args[0])
                    : author;
            const target = await resolveUser(this.client, rawUser ?? author);

            if (!target) {
                return responder?.reply?.("Please provide a valid user.");
            }

            const score = Math.floor(Math.random() * 100) + 1;
            const verdict =
                score >= 90
                    ? this.definition.high
                    : score >= 60
                        ? this.definition.mid
                        : this.definition.low;

            const panel = buildPanel({
                title: this.definition.title,
                lines: [
                    "**" + target.username + "** scored **" + score + "%** on the " + this.definition.scale + " scale.",
                    buildMeter(this.client, score) + " " + score + "%",
                    verdict,
                ],
            });

            return sendPanel(responder, panel);
        }

        async executePrompt({ responder }) {
            const panel = buildPanel({
                title: this.definition.title,
                lines: [randomItem(this.definition.prompts)],
                footer: this.definition.footer || null,
            });

            return sendPanel(responder, panel);
        }

        async executeRandomizer({ responder }) {
            const result = randomItem(this.definition.items);
            const panel = buildPanel({
                title: this.definition.title,
                lines: [
                    this.definition.intro || "Random pull complete.",
                    typeof result === "string"
                        ? result
                        : result.label || JSON.stringify(result),
                ],
                footer:
                    typeof result === "object" && result.footer
                        ? result.footer
                        : this.definition.footer || null,
            });

            return sendPanel(responder, panel);
        }

        async executeTransform({ responder, args, interaction }) {
            const text = interaction
                ? interaction.options.getString("text")
                : args.join(" ");

            if (!text) {
                return responder?.reply?.("Please provide some text.");
            }

            const transform = transformHandlers[this.definition.transform];
            if (!transform) {
                return responder?.reply?.("This transform is unavailable right now.");
            }

            const output = transform(text);
            const panel = buildPanel({
                title: this.definition.title,
                lines: [
                    "**Input**\n" + text,
                    "**Output**\n" + output.slice(0, 3500),
                ],
            });

            return sendPanel(responder, panel);
        }
    };
}

module.exports = {
    createGeneratedFunCommand,
};
