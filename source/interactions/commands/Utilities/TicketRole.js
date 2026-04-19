const Command = require("../../abstract/command");
const { buildNoticePanel, reply } = require("../../../toolkit/helpers/cv2");
const { getTicketConfig, saveTicketConfig } = require("../../../toolkit/helpers/tickets");

function respond(target, title, lines, ephemeral = true) {
  return reply(target, buildNoticePanel({ title, lines }), { ephemeral });
}

module.exports = class TicketRoleCommand extends Command {
  constructor(...args) {
    super(...args, {
      name: "ticketrole",
      aliases: ["ticketsupport"],
      description: "Manage support roles that can see new tickets.",
      usage: ["ticketrole <add|remove|list> [role]"],
      examples: ["ticketrole add @Support", "ticketrole list"],
      category: "Utilities",
      slash: false,
      userPerms: ["ManageGuild"],
      botPerms: ["SendMessages", "ViewChannel", "ManageRoles"],
      cooldown: 3,
      options: [
        {
          type: 3,
          name: "action",
          description: "Role action",
          required: true,
          choices: [
            { name: "add", value: "add" },
            { name: "remove", value: "remove" },
            { name: "list", value: "list" },
          ],
        },
        { type: 8, name: "role", description: "Support role", required: false },
      ],
    });
  }

  async perform(target, action, roleId) {
    const config = await getTicketConfig(this.client, target.guild.id);
    const mode = action?.toLowerCase();
    if (!mode) return respond(target, "Ticket Roles", ["Use `add`, `remove`, or `list`."]);

    if (mode === "list") {
      return respond(target, "Ticket Roles", [
        config.supportRoleIds.length
          ? config.supportRoleIds.map((id) => `<@&${id}>`).join("\n")
          : "No support roles configured.",
      ], false);
    }

    const role = target.guild.roles.cache.get(roleId);
    if (!role) {
      return respond(target, "Ticket Roles", ["Choose a valid role."]);
    }

    if (mode === "add") {
      if (!config.supportRoleIds.includes(role.id)) {
        config.supportRoleIds.push(role.id);
        await saveTicketConfig(this.client, target.guild.id, config);
      }
      return respond(target, "Ticket Roles", [`Added ${role} to the support role list.`], false);
    }

    if (mode === "remove") {
      config.supportRoleIds = config.supportRoleIds.filter((id) => id !== role.id);
      await saveTicketConfig(this.client, target.guild.id, config);
      return respond(target, "Ticket Roles", [`Removed ${role} from the support role list.`], false);
    }

    return respond(target, "Ticket Roles", ["Unsupported ticket role action."]);
  }

  async run({ message, args }) {
    return this.perform(message, args[0], await this.client.util.userQuery(args[1]) || args[1]?.replace(/[<@&>]/g, ""));
  }

  async exec({ interaction }) {
    return this.perform(
      interaction,
      interaction.options.getString("action"),
      interaction.options.getRole("role")?.id
    );
  }
};
