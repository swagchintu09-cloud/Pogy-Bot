const Command = require("../../abstract/command");
const os = require("os");
const ms = require("ms");

module.exports = class Botinfo extends Command {
  constructor(...args) {
    super(...args, {
      name: "botinfo",
      aliases: ["bi"],
      description: "Get information about the bot.",
      category: "Utilities",
      usage: ["botinfo"],
      botPerms: ["EmbedLinks", "ViewChannel", "SendMessages"],
      userPerms: ["ViewChannel", "SendMessages"],
      cooldown: 5,
      
    });
  }

  async fetchStats(client) {
    let totalGuilds = 0,
      totalUsers = 0;

    try {
      const guildResults = await client.Cluster.fetchClientValues(
        "guilds.cache.size"
      );
      totalGuilds = guildResults.reduce((prev, count) => prev + count, 0);

      const userResults = await client.Cluster.fetchClientValues(
        "users.cache.size"
      );
      totalUsers = userResults.reduce((prev, count) => prev + count, 0);
    } catch (err) {
      totalGuilds = client.guilds.cache.size;
      totalUsers = client.users.cache.size;
    }

    return { totalGuilds, totalUsers };
  }

  buildEmbed(client, totalGuilds, totalUsers, requester) {
    const uptime = ms(client.uptime, { long: true });
    const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    );
    const cpuUsage = process.cpuUsage();
    const cpuTime = ((cpuUsage.user + cpuUsage.system) / 1000).toFixed(2); // ms

    return this.client.util
      .embed()
      .setTitle("📊 ")
      
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        `🤖 **Bot Information**\n` +
          `\`\`\`Name     : ${client.user.username}\n` +
          `ID       : ${client.user.id}\n` +
          `Library  : Discord.js v14\n` +
          `Uptime   : ${uptime}\n` +
          `Database : MongoDB + Sql3\`\`\`\n\n` +
          `📈 **Usage Statistics**\n` +
          `\`\`\`Servers  : ${totalGuilds.toLocaleString()}\n` +
          `Users    : ${totalUsers.toLocaleString()}\n` +
          `Channels : ${client.channels.cache.size.toLocaleString()}\`\`\`\n\n` +
          `⚡ **Performance**\n` +
          `\`\`\`Ping     : ${client.ws.ping}ms\n` +
          `Memory   : ${memoryUsage} MB\n` +
          `CPU Time : ${cpuTime} ms\`\`\`\n\n` +
          `📋 **Commands**\n` +
          `\`\`\`Total    : ${client.commands.size}\n` +
          `Slash    : 83\n` +
          `Prefix   : 143\n` +
          `Categories: ${
            new Set(client.commands.map((c) => c.category)).size
          }\`\`\``
      )
      .setFooter({
        text: `Requested by ${requester.username}`,
        iconURL: requester.displayAvatarURL(),
      });
  }

  async run({ message }) {
    const { totalGuilds, totalUsers } = await this.fetchStats(this.client);
    const embed = this.buildEmbed(
      this.client,
      totalGuilds,
      totalUsers,
      message.author
    );

    message.channel.send({ embeds: [embed] });
  }

  async exec({ interaction }) {
    const { totalGuilds, totalUsers } = await this.fetchStats(this.client);
    const embed = this.buildEmbed(
      this.client,
      totalGuilds,
      totalUsers,
      interaction.user
    );

    interaction.reply({ embeds: [embed] });
  }
};



