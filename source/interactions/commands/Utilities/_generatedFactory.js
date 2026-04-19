const crypto = require("crypto");
const Command = require("../../abstract/command");
const { buildPanel, sendPanel } = require("./_panel");

function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return NaN;
  return Number(value.replace(/,/g, "").trim());
}

function parseItems(value) {
  return value
    .split(/[\n,|]+/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function formatNumber(value, digits = 4) {
  if (!Number.isFinite(value)) return "NaN";
  const normalized = Math.abs(value) >= 1000 || Number.isInteger(value)
    ? value.toLocaleString("en-US")
    : value.toFixed(digits).replace(/\.?0+$/, "");
  return normalized;
}

function titleCase(value) {
  return value.replace(/\b\w/g, (match) => match.toUpperCase());
}

const textTransforms = {
  reverse: (text) => text.split("").reverse().join(""),
  uppercase: (text) => text.toUpperCase(),
  lowercase: (text) => text.toLowerCase(),
  titlecase: (text) => titleCase(text.toLowerCase()),
  camelcase: (text) => {
    const parts = text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    return parts
      .map((part, index) =>
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join("");
  },
  pascalcase: (text) =>
    text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(""),
  snakecase: (text) =>
    text.trim().toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join("_"),
  kebabcase: (text) =>
    text.trim().toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join("-"),
  constantcase: (text) =>
    text.trim().toUpperCase().split(/[^A-Z0-9]+/).filter(Boolean).join("_"),
  alterncase: (text) =>
    text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join(""),
  swapcase: (text) =>
    text
      .split("")
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join(""),
  removespaces: (text) => text.replace(/\s+/g, ""),
  normalizews: (text) => text.replace(/\s+/g, " ").trim(),
  doublespace: (text) => text.split(" ").join("  "),
  triplespace: (text) => text.split(" ").join("   "),
  clap: (text) => text.split(/\s+/).filter(Boolean).join(" * "),
  dot: (text) => text.split(/\s+/).filter(Boolean).join(" . "),
  spaced: (text) => text.split("").join(" "),
  box: (text) => text.split("").map((char) => `[${char}]`).join(" "),
  mock: (text) =>
    text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join(""),
  spoiler: (text) => text.split("").map((char) => `||${char}||`).join(""),
  mirrorwords: (text) => text.split(/\s+/).filter(Boolean).reverse().join(" "),
  sortwords: (text) =>
    text.split(/\s+/).filter(Boolean).sort((a, b) => a.localeCompare(b)).join(" "),
  sortchars: (text) => text.split("").sort((a, b) => a.localeCompare(b)).join(""),
  dedupewords: (text) => [...new Set(text.split(/\s+/).filter(Boolean))].join(" "),
  dedupechars: (text) => [...new Set(text.split(""))].join(""),
  vowelsonly: (text) => text.replace(/[^aeiou]/gi, ""),
  consonantsonly: (text) => text.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, ""),
  stripnumbers: (text) => text.replace(/[0-9]/g, ""),
  stripletters: (text) => text.replace(/[a-z]/gi, ""),
  stripsymbols: (text) => text.replace(/[^a-z0-9\s]/gi, ""),
  onlysymbols: (text) => (text.match(/[^a-z0-9\s]/gi) || []).join(""),
  slug: (text) => text.trim().toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join("-"),
  initials: (text) =>
    text.split(/\s+/).filter(Boolean).map((word) => word[0].toUpperCase()).join(""),
  sentcase: (text) => {
    const lowered = text.toLowerCase();
    return lowered.charAt(0).toUpperCase() + lowered.slice(1);
  },
  trim: (text) => text.trim(),
  repeat2: (text) => `${text} ${text}`,
  repeat3: (text) => `${text} ${text} ${text}`,
};

const textAnalyses = {
  charcount: (text) => `Characters: **${text.length}**`,
  wordcount: (text) => `Words: **${text.trim() ? text.trim().split(/\s+/).length : 0}**`,
  linecount: (text) => `Lines: **${text.split("\n").length}**`,
  vowelcount: (text) => `Vowels: **${(text.match(/[aeiou]/gi) || []).length}**`,
  consonantcount: (text) => `Consonants: **${(text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length}**`,
  digitcount: (text) => `Digits: **${(text.match(/[0-9]/g) || []).length}**`,
  symbolcount: (text) => `Symbols: **${(text.match(/[^a-z0-9\s]/gi) || []).length}**`,
  uppercasecount: (text) => `Uppercase letters: **${(text.match(/[A-Z]/g) || []).length}**`,
  lowercasecount: (text) => `Lowercase letters: **${(text.match(/[a-z]/g) || []).length}**`,
  spacecount: (text) => `Spaces: **${(text.match(/\s/g) || []).length}**`,
  uniquechars: (text) => `Unique characters: **${new Set(text.split("")).size}**`,
  uniquewords: (text) => `Unique words: **${new Set(text.toLowerCase().split(/\s+/).filter(Boolean)).size}**`,
  avgwordlen: (text) => {
    const words = text.split(/\s+/).filter(Boolean);
    const avg = words.length
      ? words.reduce((sum, word) => sum + word.length, 0) / words.length
      : 0;
    return `Average word length: **${formatNumber(avg, 2)}**`;
  },
  longestword: (text) => {
    const words = text.split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);
    return `Longest word: **${words[0] || "None"}**`;
  },
  shortestword: (text) => {
    const words = text.split(/\s+/).filter(Boolean).sort((a, b) => a.length - b.length);
    return `Shortest word: **${words[0] || "None"}**`;
  },
  ispalindrome: (text) => {
    const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = normalized.split("").reverse().join("");
    return `Palindrome check: **${normalized && normalized === reversed ? "Yes" : "No"}**`;
  },
  readingtime: (text) => {
    const words = text.split(/\s+/).filter(Boolean).length;
    return `Estimated reading time: **${Math.max(1, Math.ceil(words / 200))} min**`;
  },
  paragraphcount: (text) => {
    const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length;
    return `Paragraphs: **${paragraphs}**`;
  },
  tokenestimate: (text) => `Estimated tokens: **${Math.ceil(text.length / 4)}**`,
  urlcount: (text) => `URLs found: **${(text.match(/https?:\/\/\S+/g) || []).length}**`,
};

const encodeHandlers = {
  base64encode: (text) => Buffer.from(text, "utf8").toString("base64"),
  base64decode: (text) => Buffer.from(text, "base64").toString("utf8"),
  hexencode: (text) => Buffer.from(text, "utf8").toString("hex"),
  hexdecode: (text) => Buffer.from(text, "hex").toString("utf8"),
  binaryencode: (text) =>
    text.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" "),
  binarydecode: (text) =>
    text
      .trim()
      .split(/\s+/)
      .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
      .join(""),
  urlencode: (text) => encodeURIComponent(text),
  urldecode: (text) => decodeURIComponent(text),
  htmlencode: (text) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;"),
  htmldecode: (text) =>
    text
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&"),
};

function makeOptions(definition) {
  if (definition.options) return definition.options;

  if (["text_transform", "text_analyze", "encode"].includes(definition.mode)) {
    return [
      {
        name: "text",
        description: "The text to process.",
        type: 3,
        required: true,
      },
    ];
  }

  if (["number_single", "unit_convert"].includes(definition.mode)) {
    return [
      {
        name: "value",
        description: "The number to process.",
        type: 10,
        required: true,
      },
    ];
  }

  if (["number_pair", "ratio"].includes(definition.mode)) {
    return [
      {
        name: "left",
        description: "The first number.",
        type: 10,
        required: true,
      },
      {
        name: "right",
        description: "The second number.",
        type: 10,
        required: true,
      },
    ];
  }

  if (definition.mode === "list_tool") {
    return [
      {
        name: "items",
        description: "Comma, pipe, or line separated items.",
        type: 3,
        required: true,
      },
    ];
  }

  return null;
}

function createGeneratedUtilityCommand(definition) {
  return class GeneratedUtilityCommand extends Command {
    constructor(...args) {
      const example =
        definition.examples?.[0] ||
        definition.usage?.[0] ||
        definition.name;
      super(...args, {
        name: definition.name,
        aliases: definition.aliases || [definition.name],
        description: definition.description,
        category: "Utilities",
        usage: definition.usage || [definition.name],
        examples: definition.examples || [example],
        userPerms: ["ViewChannel", "SendMessages"],
        botPerms: ["ViewChannel", "SendMessages"],
        cooldown: definition.cooldown ?? 2,
        slash: false,
        options: makeOptions(definition),
      });
      this.definition = definition;
      this.utilityGroup = definition.group || definition.mode || "general";
    }

    async run({ message, args }) {
      return this.execute({
        responder: message,
        args: args ?? [],
        interaction: null,
      });
    }

    async exec({ interaction }) {
      return this.execute({
        responder: interaction,
        args: [],
        interaction,
      });
    }

    async execute(context) {
      switch (this.definition.mode) {
        case "text_transform":
          return this.handleTextTransform(context);
        case "text_analyze":
          return this.handleTextAnalyze(context);
        case "encode":
          return this.handleEncode(context);
        case "number_single":
          return this.handleNumberSingle(context);
        case "number_pair":
          return this.handleNumberPair(context);
        case "ratio":
          return this.handleRatio(context);
        case "unit_convert":
          return this.handleUnitConvert(context);
        case "list_tool":
          return this.handleListTool(context);
        default:
          return context.responder?.reply?.("This utility command is not configured correctly.");
      }
    }

    async handleTextTransform({ responder, args, interaction }) {
      const text = interaction ? interaction.options.getString("text") : args.join(" ");
      if (!text) return responder?.reply?.("Please provide some text.");
      const handler = textTransforms[this.definition.transform];
      const output = handler ? handler(text) : text;

      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            "**Input**\n" + text.slice(0, 1500),
            "**Output**\n" + output.slice(0, 2000),
          ],
        })
      );
    }

    async handleTextAnalyze({ responder, args, interaction }) {
      const text = interaction ? interaction.options.getString("text") : args.join(" ");
      if (!text) return responder?.reply?.("Please provide some text.");
      const handler = textAnalyses[this.definition.analyze];
      const summary = handler ? handler(text) : "No analysis available.";

      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            summary,
            "**Preview**\n" + text.slice(0, 1800),
          ],
        })
      );
    }

    async handleEncode({ responder, args, interaction }) {
      const text = interaction ? interaction.options.getString("text") : args.join(" ");
      if (!text) return responder?.reply?.("Please provide some text.");

      try {
        let output = "";
        if (this.definition.algorithm?.startsWith("hash:")) {
          const name = this.definition.algorithm.split(":")[1];
          output = crypto.createHash(name).update(text).digest("hex");
        } else {
          const handler = encodeHandlers[this.definition.algorithm];
          output = handler ? handler(text) : text;
        }

        return sendPanel(
          responder,
          buildPanel({
            title: this.definition.title,
            lines: [
              "**Input**\n" + text.slice(0, 1000),
              "**Output**\n" + String(output).slice(0, 2200),
            ],
          })
        );
      } catch (error) {
        return responder?.reply?.("I could not process that input for this converter.");
      }
    }

    async handleNumberSingle({ responder, args, interaction }) {
      const raw = interaction
        ? interaction.options.getNumber("value")
        : parseNumber(args[0]);
      if (!Number.isFinite(raw)) return responder?.reply?.("Please provide a valid number.");
      const result = this.definition.compute(raw);

      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            "**Input**  `" + formatNumber(raw, 6) + "`",
            "**Result**  `" + formatNumber(result, 6) + "`",
          ],
          footer: this.definition.footer || null,
        })
      );
    }

    async handleNumberPair({ responder, args, interaction }) {
      const left = interaction
        ? interaction.options.getNumber("left")
        : parseNumber(args[0]);
      const right = interaction
        ? interaction.options.getNumber("right")
        : parseNumber(args[1]);
      if (!Number.isFinite(left) || !Number.isFinite(right)) {
        return responder?.reply?.("Please provide two valid numbers.");
      }

      const result = this.definition.compute(left, right);
      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            "**Input**  `" + formatNumber(left, 6) + "`, `" + formatNumber(right, 6) + "`",
            "**Result**  `" + formatNumber(result, 6) + "`",
          ],
          footer: this.definition.footer || null,
        })
      );
    }

    async handleRatio({ responder, args, interaction }) {
      const left = interaction
        ? interaction.options.getNumber("left")
        : parseNumber(args[0]);
      const right = interaction
        ? interaction.options.getNumber("right")
        : parseNumber(args[1]);
      if (!Number.isFinite(left) || !Number.isFinite(right)) {
        return responder?.reply?.("Please provide two valid numbers.");
      }
      if (right === 0) {
        return responder?.reply?.("The second number cannot be zero for this calculation.");
      }
      const result = this.definition.compute(left, right);
      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            "**Input**  `" + formatNumber(left, 6) + "`, `" + formatNumber(right, 6) + "`",
            "**Result**  `" + formatNumber(result, 6) + this.definition.suffix + "`",
          ],
          footer: this.definition.footer || null,
        })
      );
    }

    async handleUnitConvert({ responder, args, interaction }) {
      const value = interaction
        ? interaction.options.getNumber("value")
        : parseNumber(args[0]);
      if (!Number.isFinite(value)) {
        return responder?.reply?.("Please provide a valid number.");
      }

      let result;
      if (this.definition.formula === "c_to_f") result = (value * 9) / 5 + 32;
      else if (this.definition.formula === "f_to_c") result = ((value - 32) * 5) / 9;
      else if (this.definition.formula === "c_to_k") result = value + 273.15;
      else if (this.definition.formula === "k_to_c") result = value - 273.15;
      else if (this.definition.formula === "f_to_k") result = ((value - 32) * 5) / 9 + 273.15;
      else if (this.definition.formula === "k_to_f") result = ((value - 273.15) * 9) / 5 + 32;
      else result = value * this.definition.factor;

      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines: [
            `**${this.definition.fromLabel}**  \`${formatNumber(value, 6)}\``,
            `**${this.definition.toLabel}**  \`${formatNumber(result, 6)}\``,
          ],
        })
      );
    }

    async handleListTool({ responder, args, interaction }) {
      const raw = interaction ? interaction.options.getString("items") : args.join(" ");
      if (!raw) return responder?.reply?.("Please provide a list of items.");
      const items = parseItems(raw);
      if (!items.length) return responder?.reply?.("Please provide a usable list.");

      let lines = [];
      switch (this.definition.tool) {
        case "pick":
          lines = ["**Selected**\n" + items[Math.floor(Math.random() * items.length)]];
          break;
        case "shuffle":
          lines = [
            "**Shuffled**",
            [...items]
              .sort(() => Math.random() - 0.5)
              .map((item, index) => `${index + 1}. ${item}`)
              .join("\n"),
          ];
          break;
        case "sort":
          lines = [
            "**Sorted**",
            [...items].sort((a, b) => a.localeCompare(b)).join("\n"),
          ];
          break;
        case "reverse":
          lines = [
            "**Reversed**",
            [...items].reverse().join("\n"),
          ];
          break;
        case "dedupe":
          lines = [
            "**Unique Items**",
            [...new Set(items)].join("\n"),
          ];
          break;
        case "count":
          lines = [`Items found: **${items.length}**`];
          break;
        default:
          lines = [items.join("\n")];
      }

      return sendPanel(
        responder,
        buildPanel({
          title: this.definition.title,
          lines,
        })
      );
    }
  };
}

module.exports = {
  createGeneratedUtilityCommand,
};
