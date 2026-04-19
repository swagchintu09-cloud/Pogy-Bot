const { ActivityType, IntentsBitField, Partials } = require("discord.js");
const { QuickDB } = require("quick.db");
const Cluster = require("discord-hybrid-sharding");
const PogyClient = require("../core/PogyClient");
const settings = require("../settings");

require("events").defaultMaxListeners = 1000;

function createShardClient() {
  const info = Cluster.ClusterClient.getInfo();
  const client = new PogyClient({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildModeration,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildPresences,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.GuildEmojisAndStickers,
      IntentsBitField.Flags.GuildVoiceStates,
      IntentsBitField.Flags.GuildIntegrations,
      IntentsBitField.Flags.GuildMessageTyping,
      IntentsBitField.Flags.GuildWebhooks
    ],
    presence: {
      status: "dnd",
      activities: [{ name: `${settings.Client.Prefix}help`, type: ActivityType.Listening }]
    },
    allowedMentions: { parse: ["users"], repliedUser: false },
    partials: [Partials.Message, Partials.GuildMember, Partials.Reaction, Partials.User],
    shards: info.SHARD_LIST,
    shardCount: info.TOTAL_SHARDS
  });

  client.db = new QuickDB();
  client.polls = new Map();
  return client;
}

async function bootShard() {
  const client = createShardClient();
  await client.login(settings.Client.Token);
}

bootShard().catch((error) => {
  console.error("Shard bootstrap failed.", error);
  process.exitCode = 1;
});

process.on("uncaughtException", (error) => {
  const ignoredCodes = [10001, 10003, 10004, 10005, 10008, 10062, 4000, 50001, 50013, 50035];
  if (ignoredCodes.includes(error?.code)) {
    return;
  }
  console.error("Unhandled exception in shard.", error);
});


