const { readdirSync } = require("fs");
const { Collection } = require("discord.js");

class ListenerLoader {
  constructor(client) {
    this.client = client;
  }

  async load() {
    const listenerRoot = `${process.cwd()}/source/listeners`;
    const files = readdirSync(listenerRoot).filter((file) => file.endsWith(".js"));
    this.client.events = new Collection();

    for (const file of files) {
      const Listener = require(`${listenerRoot}/${file}`);
      const listener = new Listener(this.client);
      const executor = listener.exec.bind(listener);
      this.client.events.set(listener.name, listener);

      if (listener.once) {
        this.client.once(listener.name, executor);
      } else {
        this.client.on(listener.name, executor);
      }
    }
  }
}

module.exports = ListenerLoader;



