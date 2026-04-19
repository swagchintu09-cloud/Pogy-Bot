module.exports = {
  async logAnti(client, guild, payload) {
    try {
      const anti = await client.database.antiNukeData.get(guild.id);
      if (!anti || !anti.enabled || !anti.logchannelid) return;

      const ch = guild.channels.cache.get(anti.logchannelid);
      if (!ch) return;

      if (typeof payload === "string") {
        return ch.send({ content: payload }).catch(() => {});
      } else {
        return ch.send(payload).catch(() => {});
      }
    } catch (err) {
      console.error("AntiNuke log error:", err);
    }
  },
};



