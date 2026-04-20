const Command = require("../../abstract/command");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ContainerBuilder,
  MessageFlags,
  SeparatorBuilder,
  SeparatorSpacingSize,
  StringSelectMenuBuilder,
  TextDisplayBuilder,
} = require("discord.js");

module.exports = class HelpCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "help",
      aliases: ["h", "commands"],
      description: "Browse commands.",
      usage: ["help", "help <command/category>"],
      examples: ["help", "help ping", "help moderation"],
      category: "Utilities",
      userPerms: ["SendMessages"],
      guildOnly: true,
      botPerms: ["ViewChannel", "SendMessages"],
      cooldown: 5,
      options: [
        {
          type: 3,
          name: "query",
          description: "Command or category name",
          required: false,
        },
      ],
    });

    this.pageSize = 24;
    this.categoryAliases = {
      utility: "utilities-1",
      utilities: "utilities-1",
      "utility-1": "utilities-1",
      "utility-2": "utilities-2",
      "utility-3": "utilities-3",
      "utilities-1": "utilities-1",
      "utilities-2": "utilities-2",
      "utilities-3": "utilities-3",
      owner: "owners",
      owners: "owners",
      server: "utilities-2",
      verify: "welcome",
      verification: "welcome",
      birthday: "utilities-2",
    };
  }

  async run({ message, args }) {
    await this.present({
      source: message,
      isSlash: false,
      query: args.join(" ").trim(),
    });
  }

  async exec({ interaction }) {
    await this.present({
      source: interaction,
      isSlash: true,
      query: interaction.options.getString("query")?.trim() || "",
    });
  }

  getEmojis() {
    return this.client.config.Client.emoji;
  }

  getCategoryMeta(key) {
    const emoji = this.getEmojis();
    const map = {
      antinuke: {
        label: "Antinuke",
        emoji: emoji.antinuke,
        blurb: "Raid locks, trust controls, and destructive-action guards.",
      },
      moderation: {
        label: "Moderation",
        emoji: emoji.moderation,
        blurb: "Punishments, cleanup, role control, and server safety tools.",
      },
      utilities: {
        label: "Utilities",
        emoji: emoji.utility,
        blurb: "Core utility surface, setup tools, info, and server management.",
      },
      "utilities-1": {
        label: "Utility I",
        emoji: emoji.utility,
        blurb: "Core commands, ticket tools, application tools, and the most important utility controls.",
      },
      "utilities-2": {
        label: "Utility II",
        emoji: emoji.gear || emoji.utility,
        blurb: "Management utilities, setup surfaces, and broader server-side utility commands.",
      },
      "utilities-3": {
        label: "Utility III",
        emoji: emoji.info,
        blurb: "Large helper pool, generators, converters, text tools, and lower-priority utility extras.",
      },
      welcome: {
        label: "Welcome",
        emoji: emoji.welcome,
        blurb: "Join flow, greet delivery, onboarding, and member entry setup.",
      },
      fun: {
        label: "Fun",
        emoji: emoji.fun,
        blurb: "Games, reactions, prompts, randomizers, and chaotic extras.",
      },
      music: {
        label: "Music",
        emoji: emoji.guide || emoji.fun,
        blurb: "Playback, queue control, lyrics, playlists, and voice music tools.",
      },
      giveaways: {
        label: "Giveaways",
        emoji: emoji.giveaway,
        blurb: "Launch, reroll, list, and close giveaway campaigns.",
      },
      profile: {
        label: "Profile",
        emoji: emoji.member,
        blurb: "Profile cards, bios, cosmetic backgrounds, and profile tools.",
      },
      owners: {
        label: "Owners",
        emoji: emoji.developerEmoji,
        blurb: "Restricted maintainer tools and private bot management commands.",
      },
      warn: {
        label: "Warn",
        emoji: emoji.info,
        blurb: "Warn cases, moderation records, and case-history actions.",
      },
      general: {
        label: "General",
        emoji: emoji.POGYCLIENTemo,
        blurb: "Miscellaneous commands that do not fit a larger group.",
      },
    };
    return map[key] || map.general;
  }

  getUtilityTier(command) {
    const name = command.name.toLowerCase();
    const primary = new Set([
      "help", "ping", "invite", "support", "avatar", "banner", "userinfo",
      "serverinfo", "profile", "ticketsetup", "ticketpanel", "ticketrole",
      "ticketclose", "ticketadd", "ticketremove", "applysetup", "applypanel",
      "applyquestion", "applyconfig",
    ]);

    if (primary.has(name) || name.startsWith("ticket") || name.startsWith("apply")) {
      return "utilities-1";
    }

    const tertiaryHints = [
      "text", "convert", "random", "encode", "decode", "hash", "case",
      "math", "calc", "percent", "unit", "binary", "hex", "base", "slug",
      "lower", "upper", "mock", "reverse",
    ];

    if (tertiaryHints.some((hint) => name.includes(hint))) {
      return "utilities-3";
    }

    return "utilities-2";
  }

  normalizeCategory(raw) {
    const key = (raw || "general").trim().toLowerCase();
    return this.categoryAliases[key] || key;
  }

  async present({ source, isSlash, query }) {
    const guild = source.guild;
    const viewer = isSlash ? source.user : source.author;
    const sessionId = source.id;
    const cachedConfig =
      (await this.client.cache.get(`${guild.id}1`)) ||
      (await this.client.database.guildData.get(guild.id));

    if (cachedConfig) {
      guild.config = cachedConfig;
      await this.client.cache.set(`${guild.id}1`, cachedConfig);
    }

    const prefix = guild.config?.prefix || this.client.config.Client.Prefix;
    const catalog = this.buildCatalog(prefix);
    const resolved = this.resolveQuery(query, catalog);

    const initialView = resolved
      ? this.renderResolved(resolved, catalog, prefix, viewer, sessionId)
      : this.renderHome(catalog, prefix, viewer, sessionId);

    const reply = await this.send(source, isSlash, initialView);
    if (!reply?.createMessageComponentCollector) return;

    const collector = reply.createMessageComponentCollector({
      time: 120000,
      filter: (interaction) =>
        interaction.user.id === viewer.id &&
        interaction.customId?.startsWith(`help:${sessionId}:`),
    });

    collector.on("collect", async (interaction) => {
      if (interaction.customId === `help:${sessionId}:close`) {
        collector.stop("closed");
        await interaction.update(
          this.renderClosed(prefix, viewer, "Help panel closed.")
        ).catch(() => {});
        return;
      }

      let nextView = null;
      const parts = interaction.customId.split(":");
      const action = parts[2];

      if (action === "home") {
        nextView = this.renderHome(catalog, prefix, viewer, sessionId);
      } else if (action === "category") {
        const category = catalog.categories.find(
          (entry) => entry.key === interaction.values[0]
        );
        nextView = category
          ? this.renderCategory(category, catalog, prefix, viewer, sessionId, false, 0)
          : this.renderHome(catalog, prefix, viewer, sessionId);
      } else if (action === "page") {
        const [, , , categoryKey, pageValue, direction] = parts;
        if (direction === "stay") {
          await interaction.deferUpdate().catch(() => {});
          return;
        }
        const category = catalog.categories.find((entry) => entry.key === categoryKey);
        if (!category) {
          nextView = this.renderHome(catalog, prefix, viewer, sessionId);
        } else {
          const page = Number(pageValue || 0);
          const nextPage = direction === "next" ? page + 1 : page - 1;
          nextView = this.renderCategory(category, catalog, prefix, viewer, sessionId, false, nextPage);
        }
      }

      if (nextView) {
        await interaction.update(nextView).catch(async () => {
          if (!interaction.deferred && !interaction.replied) {
            await interaction.deferUpdate().catch(() => {});
          }
        });
      }
    });

    collector.on("end", async (_items, reason) => {
      if (reason === "closed") return;
      try {
        await reply.edit(
          this.renderClosed(
            prefix,
            viewer,
            `Help menu expired. Please use \`${prefix}help\` or \`/help\` again.`
          )
        );
      } catch {}
    });
  }

  async send(source, isSlash, payload) {
    if (isSlash) {
      if (source.deferred || source.replied) {
        await source.editReply(payload);
        return source.fetchReply();
      }
      await source.reply(payload);
      return source.fetchReply();
    }
    return source.reply(payload);
  }

  buildCatalog(prefix) {
    const commands = [...this.client.commands.values()]
      .filter((command) => !command.ownerOnly)
      .sort((left, right) => left.name.localeCompare(right.name));

    const byCategory = new Map();
    for (const command of commands) {
      const normalized = this.normalizeCategory(command.category || "General");
      const key = normalized === "utilities-1" ? this.getUtilityTier(command) : normalized;
      if (!byCategory.has(key)) {
        const meta = this.getCategoryMeta(key);
        byCategory.set(key, {
          key,
          label: meta.label,
          emoji: meta.emoji,
          blurb: meta.blurb,
          commands: [],
        });
      }
      byCategory.get(key).commands.push(command);
    }

    const categories = [...byCategory.values()].sort(
      (left, right) => right.commands.length - left.commands.length
    );

    return {
      prefix,
      commands,
      categories,
      totalCommands: commands.length,
      totalCategories: categories.length,
    };
  }

  resolveQuery(query, catalog) {
    if (!query) return null;
    const value = query.toLowerCase();
    const normalizedValue = this.normalizeCategory(value);

    const category = catalog.categories.find(
      (entry) =>
        entry.key === value ||
        entry.key === normalizedValue ||
        entry.label.toLowerCase() === value
    );
    if (category) {
      return { type: "category", value: category, page: 0 };
    }

    const command = catalog.commands.find(
      (entry) =>
        entry.name.toLowerCase() === value ||
        entry.aliases.some((alias) => alias.toLowerCase() === value)
    );
    if (command) {
      return { type: "command", value: command };
    }

    return { type: "missing", value: query };
  }

  renderResolved(resolved, catalog, prefix, viewer, sessionId, disabled = false) {
    if (resolved.type === "category") {
      return this.renderCategory(resolved.value, catalog, prefix, viewer, sessionId, disabled, resolved.page || 0);
    }
    if (resolved.type === "command") {
      return this.renderCommand(resolved.value, catalog, prefix, viewer, sessionId, disabled);
    }
    return this.renderMissing(resolved.value, catalog, prefix, viewer, sessionId, disabled);
  }

  renderHome(catalog, prefix, viewer, sessionId, disabled = false) {
    const emoji = this.getEmojis();
    const container = new ContainerBuilder();
    const featured = catalog.categories.slice(0, 4);
    const spotlight = featured
      .map(
        (category, index) =>
          `${index + 1}. ${category.emoji} **${category.label}**\n${category.blurb}\nCommands: \`${category.commands.length}\``
      )
      .join("\n\n");

    const overview = catalog.categories
      .map(
        (category) =>
          `${category.emoji} **${category.label}**  \`${category.commands.length}\``
      )
      .join("  •  ");

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `# ${emoji.POGYCLIENTemo} Leviathan Help`,
          `A cleaner command hub for browsing the bot without drowning in clutter.`,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `${emoji.seen} Prefix  \`${prefix}\``,
          `${emoji.member} Commands  \`${catalog.totalCommands}\``,
          `${emoji.info} Categories  \`${catalog.totalCategories}\``,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `## Spotlight`,
          spotlight || `${emoji.info} No categories available.`,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `## Directory`,
          overview,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `${emoji.arrow} Use \`${prefix}help <command>\` for a full command card.`,
          `${emoji.arrow} Use \`${prefix}help <category>\` to jump straight into a section.`,
          `Opened for **${viewer.tag}**`,
        ].join("\n")
      )
    );

    container.addActionRowComponents(this.buildCategoryMenu(catalog, sessionId, disabled));
    container.addActionRowComponents(this.buildButtonRow(sessionId, disabled));

    return {
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    };
  }

  renderCategory(category, catalog, prefix, viewer, sessionId, disabled = false, page = 0) {
    const emoji = this.getEmojis();
    const chunks = this.buildCategoryPages(category.commands, prefix);
    const safePage = Math.max(0, Math.min(page, chunks.length - 1));
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `# ${category.emoji} ${category.label}`,
          category.blurb,
          "",
          `${emoji.member} Commands \`${category.commands.length}\`  ${emoji.dot}  ${emoji.info} Page \`${safePage + 1}/${chunks.length}\``,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `## Commands`,
          chunks[safePage],
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `${emoji.arrow} Use \`${prefix}help <command>\` for usage, aliases, and examples.`,
          `Opened for **${viewer.tag}**`,
        ].join("\n")
      )
    );

    container.addActionRowComponents(
      this.buildCategoryMenu(catalog, sessionId, disabled, category.key)
    );

    if (chunks.length > 1) {
      container.addActionRowComponents(
        this.buildPaginationRow(category.key, safePage, chunks.length, sessionId, disabled)
      );
    }

    container.addActionRowComponents(this.buildButtonRow(sessionId, disabled));

    return {
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    };
  }

  renderCommand(command, catalog, prefix, viewer, sessionId, disabled = false) {
    const categoryKey = this.normalizeCategory(command.category || "general");
    const category = catalog.categories.find((entry) => entry.key === categoryKey);
    const emoji = category?.emoji || this.getCategoryMeta(categoryKey).emoji;
    const aliases = command.aliases.length
      ? command.aliases.map((alias) => `\`${alias}\``).join(", ")
      : "None";
    const usage = this.formatEntries(command.usage, prefix, command.name);
    const examples = this.formatEntries(command.examples, prefix, command.name);
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `# ${emoji} ${command.name}`,
          command.description || "No description provided.",
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `Category: ${category?.emoji || emoji} **${category?.label || "General"}**`,
          `Aliases: ${aliases}`,
          `Cooldown: \`${command.cooldown || 0}s\``,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `## Usage`,
          usage,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `## Examples`,
          examples,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(`Opened for **${viewer.tag}**`)
    );

    container.addActionRowComponents(
      this.buildCategoryMenu(catalog, sessionId, disabled, categoryKey)
    );
    container.addActionRowComponents(this.buildButtonRow(sessionId, disabled));

    return {
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    };
  }

  renderMissing(query, catalog, prefix, viewer, sessionId, disabled = false) {
    const emoji = this.getEmojis();
    const matches = catalog.commands
      .filter((command) => command.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 10)
      .map((command) => `• \`${prefix}${command.name}\``)
      .join("\n");

    const container = new ContainerBuilder();
    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `# ${emoji.cross} No Match`,
          `Nothing matched \`${query}\`.`,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        matches
          ? [`## Suggestions`, matches].join("\n")
          : `${emoji.arrow} Try \`${prefix}help\` to browse everything.`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(`Opened for **${viewer.tag}**`)
    );

    container.addActionRowComponents(this.buildCategoryMenu(catalog, sessionId, disabled));
    container.addActionRowComponents(this.buildButtonRow(sessionId, disabled));

    return {
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    };
  }

  renderClosed(prefix, viewer, notice) {
    const emoji = this.getEmojis();
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `# ${emoji.POGYCLIENTemo} PogyClient Help`,
          notice,
        ].join("\n")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder()
        .setDivider(true)
        .setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        [
          `${emoji.arrow} Run \`${prefix}help\` to reopen the browser.`,
          `Closed for **${viewer.tag}**`,
        ].join("\n")
      )
    );

    return {
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    };
  }

  buildCategoryMenu(catalog, sessionId, disabled = false, selected = null) {
    return new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId(`help:${sessionId}:category`)
        .setPlaceholder("Choose a category")
        .setDisabled(disabled)
        .addOptions(
          catalog.categories.slice(0, 25).map((category) => ({
            label: `${category.label} (${category.commands.length})`,
            value: category.key,
            description: category.blurb.slice(0, 100),
            default: selected === category.key,
          }))
        )
    );
  }

  buildPaginationRow(categoryKey, page, totalPages, sessionId, disabled = false) {
    const emoji = this.getEmojis();
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`help:${sessionId}:page:${categoryKey}:${page}:prev`)
        .setLabel("Prev")
        .setEmoji(emoji.left || emoji.arrow)
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(disabled || page <= 0),
      new ButtonBuilder()
        .setCustomId(`help:${sessionId}:page:${categoryKey}:${page}:stay`)
        .setLabel(`${page + 1}/${totalPages}`)
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(true),
      new ButtonBuilder()
        .setCustomId(`help:${sessionId}:page:${categoryKey}:${page}:next`)
        .setLabel("Next")
        .setEmoji(emoji.right || emoji.arrow)
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(disabled || page >= totalPages - 1)
    );
  }

  buildButtonRow(sessionId, disabled = false) {
    const emoji = this.getEmojis();
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`help:${sessionId}:home`)
        .setLabel("Home")
        .setEmoji(emoji.POGYCLIENTemo)
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(disabled),
      new ButtonBuilder()
        .setLabel("Support")
        .setEmoji(emoji.support)
        .setStyle(ButtonStyle.Link)
        .setURL(this.client.config.Url.SupportURL || "https://discord.gg/codexdev"),
      new ButtonBuilder()
        .setCustomId(`help:${sessionId}:close`)
        .setLabel("Close")
        .setEmoji(emoji.cross)
        .setStyle(ButtonStyle.Danger)
        .setDisabled(disabled)
    );
  }

  buildCategoryPages(commands, prefix) {
    const lines = commands.map((command) => {
      const description = (command.description || "No description provided.")
        .replace(/\s+/g, " ")
        .trim();
      return `### \`${prefix}${command.name}\`\n${description}`;
    });

    const chunks = [];
    let current = "";
    const limit = 3400;

    for (const line of lines) {
      const candidate = current ? `${current}\n\n${line}` : line;
      if (candidate.length > limit) {
        if (current) {
          chunks.push(current);
          current = line;
        } else {
          chunks.push(line.slice(0, limit));
          current = "";
        }
      } else {
        current = candidate;
      }
    }

    if (current) chunks.push(current);
    return chunks.length ? chunks : ["No commands available."];
  }

  formatEntries(entries, prefix, fallback) {
    const list = Array.isArray(entries) ? entries.filter(Boolean) : [];
    if (!list.length) return `\`${prefix}${fallback}\``;
    return list.map((entry) => `\`${prefix}${entry}\``).join("\n");
  }
};
