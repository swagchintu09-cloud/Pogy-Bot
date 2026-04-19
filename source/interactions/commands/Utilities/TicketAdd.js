const Command = require("../../abstract/command");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { isTicketChannel } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketAddCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketadd",
      aliases: [],
      description: "Add a member to the current ticket channel.",
      usage: ["ticketadd <user>"],
      examples: ["ticketadd @user"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageChannels"],
      botPerms: ["ManageChannels", "ViewChannel", "SendMessages"],
      cooldown: 3,
      options: [{ type: 6, name: "user", description: "User to add", required: true }],
    });
  }

  async perform(target, userId) {
    if (!isTicketChannel(target.channel)) {
      return respond(target, "Tickets", ["This command only works in a managed ticket channel."]);
    }
    const member = await target.guild.members.fetch(userId).catch(() => null);
    if (!member) return respond(target, "Tickets", ["Choose a valid server member."]);

    await target.channel.permissionOverwrites.edit(member.id, {
      ViewChannel: true,
      SendMessages: true,
      ReadMessageHistory: true,
      AttachFiles: true,
    }).catch(() => null);

    return respond(target, "Tickets", [`Added **${member.user.tag}** to this ticket.`], false);
  }

  async run({ message, args }) {
    const id = await this.client.util.userQuery(args[0]);
    return this.perform(message, id);
  }

  async exec({ interaction }) {
    return this.perform(interaction, interaction.options.getUser("user")?.id);
  }
};
