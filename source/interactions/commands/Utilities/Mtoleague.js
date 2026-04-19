const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtoleague",
  aliases: ["mtoleague"],
  title: "Meters To Leagues",
  description: "Convert meters to leagues.",
  usage: ["mtoleague <value>"],
  examples: ["mtoleague 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Leagues",
  factor: 0.000207123730745778
});
