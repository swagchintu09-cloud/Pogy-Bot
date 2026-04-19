const Command = require("../../abstract/command");
const { clearUserCases, getCasesForUser, resolveMember, respond } = require("./_shared");

module.exports = class ClearCaseCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "clearcase",
      aliases: ["clearcases"],
      description: "Clear every moderation case for a specific member.",
      usage: ["clearcase <user>"],
      examples: ["clearcase @user"],
      category: "Moderation",
      userPerms: ["ManageMessages"],
      botPerms: ["SendMessages"],
      guildOnly: true,
      cooldown: 3,
      options: [{ type: 6, name: "user", description: "User to clear", required: true }],
    });
  }

  async perform(target, rawUser) {
    const member = await resolveMember(target, rawUser);
    if (!member) {
      return respond(target, "Clear Cases", ["Provide a valid server member."]);
    }

    const entries = await getCasesForUser(target.guild.id, member.id);
    if (!entries.length) {
      return respond(target, "Clear Cases", [`**${member.user.tag}** has no cases to clear.`], false);
    }

    await clearUserCases(target.guild.id, member.id);
    return respond(target, "Cases Cleared", [
      `Deleted **${entries.length}** case(s) for **${member.user.tag}**.`,
    ], false);
  }

  async run({ message, args }) {
    return this.perform(message, args[0]);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getUser("user")?.id);
  }
};
