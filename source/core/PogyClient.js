const {
  Client,
  Collection,
  LimitedCollection,
  PermissionsBitField
} = require("discord.js");
const { Cheshire } = require("cheshire");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const Cluster = require("discord-hybrid-sharding");
const NodeCache = require("node-cache");
const axios = require("axios");
const { readdirSync } = require("fs");
const Topgg = require("@top-gg/sdk");
const settings = require("../settings");
const Telemetry = require("../toolkit/telemetry");
const UtilityBelt = require("../toolkit/utility-belt");
const ListenerLoader = require("./loaders/listener-loader");
const InteractionLoader = require("./loaders/interaction-loader");
const RepositoryBus = require("./services/repository-bus");
const ActionSuite = require("./services/action-suite");
const MemoryStore = require("./services/memory-store");
const AIOrchestrator = require("./services/ai-orchestrator");
const GiveawayOrchestrator = require("./giveaways/giveaway-orchestrator");
const MusicManager = require("./music/music-manager");
const YoutubeFeed = require("../integrations/youtube-feed");
const DashboardTelemetry = require("../toolkit/helpers/dashboard-telemetry");

const sharedCache = new NodeCache({ stdTTL: 300, checkperiod: 120 });

class PogyClient extends Client {
  constructor(options = {}) {
    options.makeCache = createCacheFactory;
    super(options);
    const originalOn = this.on.bind(this);
    const originalOnce = this.once.bind(this);
    this.on = (event, listener) => {
      return originalOn(event === "ready" ? "clientReady" : event, listener);
    };
    this.once = (event, listener) => {
      return originalOnce(event === "ready" ? "clientReady" : event, listener);
    };

    this.validate(settings);
    this.config = settings;
    this.logger = Telemetry;
    this.Cluster = new Cluster.ClusterClient(this);
    this.util = new UtilityBelt(this);
    this.Snipe = new Collection();
    this.Location = process.cwd();
    this.database = new RepositoryBus(this);
    this.commandFunctions = new ActionSuite(this);
    this.giveawayManager = new GiveawayOrchestrator(this);
    this.music = new MusicManager(this);
    this.notifier = new YoutubeFeed(this);
    this.dashboardTelemetry = new DashboardTelemetry(this);
    this.cache = new MemoryStore(this);
    this.fetch = fetch;
    this.axios = axios;
    this.cacheManager = sharedCache;
    this.punishLimit = new Collection();
    this.AiManager = new AIOrchestrator(this);
    this.topgg = new Topgg.Api(this.config.Client.TopGG);
    this.PrimaryColor = this.config.Client.PrimaryColor;
    this.SuccessColor = this.config.Client.SuccessColor;
    this.ErrorColor = this.config.Client.ErrorColor;
    this.Tick = this.config.Client.emoji.tick;
    this.Down = this.config.Client.emoji.down;
    this.Up = this.config.Client.emoji.up;
  }

  async login(token = this.config?.Client?.Token || settings.Client.Token) {
    if (!token || typeof token !== "string") {
      throw new Error("Discord bot token is missing. Set Client.Token before starting the bot.");
    }

    // Bind the REST token before listeners can register commands or send replies.
    this.rest?.setToken(token);
    await this.connectMongo();
    await this.preloadCaches();
    await new InteractionLoader(this).load();
    await new ListenerLoader(this).load();
    const result = await super.login(token);
    this.rest?.setToken(token);
    return result;
  }

  async preloadCaches() {
    await Promise.allSettled([
      this.cacheAntiRaidData(),
      this.cacheGuildProfiles(),
      this.cacheAfkProfiles(),
      this.cacheNoPrefixProfiles(),
      this.cacheStatusProfiles()
    ]);
  }

  async cacheAntiRaidData() { return this.cacheCollection(() => this.database.antiNukeData.find(), "Cached anti-raid configuration"); }
  async cacheAfkProfiles() { return this.cacheCollection(() => this.database.afkData.find(), "Cached AFK records"); }
  async cacheNoPrefixProfiles() { return this.cacheCollection(() => this.database.noprefixUserData.find(), "Cached no-prefix records"); }

  async cacheStatusProfiles() {
    return this.cacheCollection(async () => {
      const documents = await this.database.statusData.find();
      documents.forEach((document) => { document.id = `${document.id}status`; });
      return documents;
    }, "Cached status records");
  }

  async cacheGuildProfiles() {
    return this.cacheCollection(async () => {
      const documents = await this.database.guildData.find();
      documents.forEach((document) => { document.id = `${document.id}1`; });
      return documents;
    }, "Cached guild settings");
  }

  async cacheCollection(resolver, successMessage) {
    try {
      const documents = await resolver();
      await this.cache.setbulk(documents);
      this.logger.log(successMessage, "ready");
      return true;
    } catch (error) {
      console.error(error);
      this.logger.warn(`Cache warmup skipped: ${successMessage}`);
      return false;
    }
  }

  sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

  async eventRestrict(punishment, memberId, guildId, reason) {
    try {
      const apiBase = "https://discord.com/api/v10";
      const memberUrl = `${apiBase}/guilds/${guildId}/members/${memberId}`;
      const headers = { Accept: "*/*", Authorization: `Bot ${this.config.Client.Token}`, "x-audit-log-reason": reason };
      if (this.punishLimit.has(memberId)) return;
      this.punishLimit.set(memberId, true);
      setTimeout(() => this.punishLimit.delete(memberId), 10000);

      let requestUrl = memberUrl;
      let method = "GET";
      let body;
      if (punishment === "ban") {
        requestUrl = `${apiBase}/guilds/${guildId}/bans/${memberId}`;
        method = "PUT";
      } else if (punishment === "kick") {
        requestUrl = `${memberUrl}?reason=${encodeURIComponent(reason)}`;
        method = "DELETE";
      } else if (punishment === "removeroles") {
        requestUrl = `${memberUrl}?reason=${encodeURIComponent(reason)}`;
        method = "PATCH";
        body = JSON.stringify({ roles: [] });
      } else {
        return;
      }

      const response = await fetch(requestUrl, { method, headers, body });
      if (response.ok) return;

      const guild = this.guilds.cache.get(guildId);
      const member = guild?.members.cache.get(memberId);
      if (!guild || !member) return;
      if (punishment === "ban" || punishment === "kick") {
        await member[punishment]({ reason });
        return;
      }

      const payload = await response.json().catch(() => null);
      if (payload?.code === 50013) {
        const removableRoles = member.roles.cache.filter((role) => !role.managed).map((role) => role.id);
        await member.roles.remove(removableRoles, reason);
      }
    } catch (_error) {
      return null;
    }
  }

  async getInvite(invite) {
    const inviteCode = invite.includes("discord.gg") ? invite.split("discord.gg/")[1] : invite;
    const data = await fetch(`https://discord.com/api/v8/invites/${inviteCode}?with_counts=true`, {
      headers: { Authorization: `Bot ${this.token}` }
    }).then((response) => response.json());
    return data.code ? data : false;
  }

  validate(options) {
    if (typeof options !== "object") throw new TypeError("Options should be an object.");
    if (!options.Client.DefaultPermissions) throw new Error("Default bot permissions are required.");
    if (!options.Client.DefaultUsersPermissions) throw new Error("Default user permissions are required.");
    this.defaultPerms = new PermissionsBitField(options.Client.DefaultPermissions).freeze();
    this.userPerms = new PermissionsBitField(options.Client.DefaultUsersPermissions).freeze();
  }

  reloadAllCommand() {
    const interactionRoot = `${this.Location}/source/interactions/commands`;
    readdirSync(interactionRoot).forEach((group) => {
      readdirSync(`${interactionRoot}/${group}`).forEach((file) => this.reloadCommands(file, group));
    });
  }

  reloadCommands(fileName, group) {
    const target = `${this.Location}/source/interactions/commands/${group}/${fileName}`;
    delete require.cache[require.resolve(target)];
    try {
      const NextInteraction = require(target);
      const interaction = new NextInteraction(this, fileName.toLowerCase().replace(/\.js$/, ""));
      interaction.fileName = fileName.replace(/\.js$/, "");
      this.commands.delete(interaction.name);
      this.commands.set(interaction.name, interaction);
      for (const alias of interaction.aliases) this.aliases.set(alias, interaction.name);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async connectMongo() {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(this.config.Database.Uri);
    this.Mongo = mongoose.connection;
    switch (connection.connections[0].readyState) {
      case 0: this.logger.warn("Database disconnected"); break;
      case 1: this.logger.log("Database connected", "ready"); break;
      case 2: this.logger.log("Database connection pending", "ready"); break;
      case 3: this.logger.warn("Database disconnecting"); break;
      default: break;
    }
  }
}

function createCacheFactory(manager) {
  switch (manager.name) {
    case "GuildEmojiManager":
    case "GuildInviteManager":
    case "GuildStickerManager":
    case "StageInstanceManager":
    case "ThreadManager":
      return new LimitedCollection({ maxSize: 0, sweepInterval: 200 });
    case "MessageManager":
      return new Cheshire({ lifetime: 1e6, lru: false });
    default:
      return new Collection();
  }
}

module.exports = PogyClient;

