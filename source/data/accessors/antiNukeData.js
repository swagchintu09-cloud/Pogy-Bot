const mongoData = require("../../models/antiNukeData");
const { mergeAntiNukeConfig } = require("../../toolkit/helpers/antinuke-manager");
module.exports = class antiNukeData {
  /**
   *
   * @param {import('../database')} database
   */
  constructor(database) {
    this.database = database;
  }

  async get(id) {
    let data = await mongoData.findOne({ id: id });
    if (!data) {
      data = new mongoData({ id: id, ...mergeAntiNukeConfig() });
      await data.save();
    }

    Object.assign(data, mergeAntiNukeConfig(data.toObject?.() ?? data));
    await data.save();
    this.database.client.cache.set(id, data);
    return data;
  }

  async post(id, value) {
    let data = await mongoData.findOne({ id: id });
    if (!data) {
      data = new mongoData({ id: id });
    }
    Object.assign(data, mergeAntiNukeConfig({ ...(data.toObject?.() ?? data), ...value }));
    await data.save();
    await this.database.client.cache.set(id, data);
    return data;
  }
  async find() {
    let data = await mongoData.find();
    if (data) return data;
  }
};


