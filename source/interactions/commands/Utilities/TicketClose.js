const Command = require("../../abstract/command");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { closeTicketChannel, isTicketChannel } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketCloseCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketclose",
      aliases: ["closeticket"],
      description: "Close the current managed ticket channel.",
      usage: ["ticketclose"],
      examples: ["ticketclose"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageChannels"],
      botPerms: ["SendMessages", "ManageChannels", "ViewChannel"],
      cooldown: 3,
    });
  }

  async execute(target) {
    if (!isTicketChannel(target.channel)) {
      return respond(target, "Tickets", ["This command only works in a managed ticket channel."]);
    }
    await closeTicketChannel(target, this.client);
    return null;
  }

  async run({ message }) {
    return this.execute(message);
  }

  async exec({ interaction }) {
    return this.execute(interaction);
  }
};
