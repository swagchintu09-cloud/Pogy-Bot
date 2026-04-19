const Command = require("../../abstract/command");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { getTicketOwnerId, isTicketChannel } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketRemoveCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketremove",
      aliases: [],
      description: "Remove a member from the current ticket channel.",
      usage: ["ticketremove <user>"],
      examples: ["ticketremove @user"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageChannels"],
      botPerms: ["ManageChannels", "ViewChannel", "SendMessages"],
      cooldown: 3,
      options: [{ type: 6, name: "user", description: "User to remove", required: true }],
    });
  }

  async perform(target, userId) {
    if (!isTicketChannel(target.channel)) {
      return respond(target, "Tickets", ["This command only works in a managed ticket channel."]);
    }
    if (String(userId) === String(getTicketOwnerId(target.channel))) {
      return respond(target, "Tickets", ["You cannot remove the ticket opener from their own ticket."]);
    }
    const member = await target.guild.members.fetch(userId).catch(() => null);
    if (!member) return respond(target, "Tickets", ["Choose a valid server member."]);

    await target.channel.permissionOverwrites.delete(member.id).catch(() => null);
    return respond(target, "Tickets", [`Removed **${member.user.tag}** from this ticket.`], false);
  }

  async run({ message, args }) {
    const id = await this.client.util.userQuery(args[0]);
    return this.perform(message, id);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getUser("user")?.id);
  }
};
