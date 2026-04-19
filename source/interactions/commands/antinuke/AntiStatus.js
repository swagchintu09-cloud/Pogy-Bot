const Command = require("../../abstract/command");
const { canManageAntinuke, getConfig, respond, summaryLines } = require("./_shared");

module.exports = class AntiStatus extends Command {
  constructor(...args) {
    super(...args, {
      name: "antistatus",
      aliases: ["anstatus", "nukestatus"],
      description: "Show a full antinuke overview panel.",
      usage: ["antistatus"],
      examples: ["antistatus"],
      category: "Antinuke",
      userPerms: ["Administrator"],
      botPerms: ["ViewChannel", "SendMessages"],
      cooldown: 3,
    });
  }

  async execute(target) {
    const actor = target.user || target.author;
    if (!canManageAntinuke(this.client, actor, target.guild)) {
      return respond(target, "Antinuke", ["Only the server owner can inspect the antinuke overview."]);
    }
    const config = await getConfig(this.client, target.guild.id);
    return respond(target, "Antinuke Overview", summaryLines(config), false);
  }

  async run({ message }) {
    return this.execute(message);
  }

  async exec({ interaction }) {
    return this.execute(interaction);
  }
};
