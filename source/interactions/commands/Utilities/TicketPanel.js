const Command = require("../../abstract/command");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { buildTicketPanel, getTicketConfig, saveTicketConfig } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketPanelCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketpanel",
      aliases: ["ticketsend"],
      description: "Send the ticket open panel in the current channel.",
      usage: ["ticketpanel"],
      examples: ["ticketpanel"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageGuild"],
      botPerms: ["SendMessages", "ViewChannel"],
      cooldown: 3,
    });
  }

  async execute(target) {
    const config = await getTicketConfig(this.client, target.guild.id);
    if (!config.enabled || !config.categoryId) {
      return respond(target, "Tickets", ["Run `ticketsetup` first before sending the panel."]);
    }

    await target.channel.send(buildTicketPanel(this.client, target.guild, config)).catch(() => null);
    config.panelChannelId = target.channel.id;
    await saveTicketConfig(this.client, target.guild.id, config);
    return respond(target, "Tickets", ["Ticket panel sent."], false);
  }

  async run({ message }) {
    return this.execute(message);
  }

  async exec({ interaction }) {
    return this.execute(interaction);
  }
};
