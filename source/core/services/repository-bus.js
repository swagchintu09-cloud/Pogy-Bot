const GuildRepository = require("../../data/accessors/guildData");
const WelcomeUserRepository = require("../../data/accessors/welcomeUserData");
const NoPrefixRepository = require("../../data/accessors/noprefixUserData");
const EmojiRepository = require("../../data/accessors/emojiData");
const StickyNickRepository = require("../../data/accessors/stickynickData");
const PremiumRepository = require("../../data/accessors/xhotuPermsData");
const VerificationRepository = require("../../data/accessors/guildVerificationData");
const MarriageRepository = require("../../data/accessors/marryData");
const AntiRaidRepository = require("../../data/accessors/antiNukeData");
const AfkRepository = require("../../data/accessors/afkData");
const StarboardRepository = require("../../data/accessors/starboardData");
const YoutubeRepository = require("../../data/accessors/ytData");
const StatusRepository = require("../../data/accessors/StatusData");

class RepositoryBus {
  constructor(client) {
    this.client = client;
    this.guildData = new GuildRepository(this);
    this.welcomeUserData = new WelcomeUserRepository(this);
    this.noprefixUserData = new NoPrefixRepository(this);
    this.emojiData = new EmojiRepository(this);
    this.stickynickData = new StickyNickRepository(this);
    this.xhotuPermsData = new PremiumRepository(this);
    this.guildVerificationData = new VerificationRepository(this);
    this.marryData = new MarriageRepository(this);
    this.antiNukeData = new AntiRaidRepository(this);
    this.afkData = new AfkRepository(this);
    this.starboardData = new StarboardRepository(this);
    this.ytData = new YoutubeRepository(this);
    this.statusData = new StatusRepository(this);
  }
}

module.exports = RepositoryBus;



