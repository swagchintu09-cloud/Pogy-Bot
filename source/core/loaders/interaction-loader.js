const { readdirSync } = require("fs");
const { Collection } = require("discord.js");
const BaseInteraction = require("../../framework/command");

class InteractionLoader {
  constructor(client) {
    this.client = client;
  }

  async load() {
    this.client.commands = new Collection();
    this.client.aliases = new Collection();

    const root = `${process.cwd()}/source/interactions/commands`;
    const groups = readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory());

    for (const group of groups) {
      const files = readdirSync(`${root}/${group.name}`).filter(
        (file) => file.endsWith(".js") && !file.startsWith("_")
      );

      for (const file of files) {
        const modulePath = `${root}/${group.name}/${file}`;
        delete require.cache[require.resolve(modulePath)];
        const ImportedInteraction = require(modulePath);
        const interaction = new ImportedInteraction(this.client, file.toLowerCase().replace(/\.js$/, ""));

        if (!(interaction instanceof BaseInteraction)) {
          throw new TypeError(`${file} is not a valid interaction module.`);
        }

        interaction.fileName = file.replace(/\.js$/, "");
        this.client.commands.set(interaction.name, interaction);

        for (const alias of interaction.aliases) {
          this.client.aliases.set(alias, interaction.name);
        }
      }
    }

    return this.client.commands;
  }
}

module.exports = InteractionLoader;



