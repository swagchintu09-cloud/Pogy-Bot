const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitoleague",
  aliases: ["nmitoleague"],
  title: "Nautical Miles To Leagues",
  description: "Convert nautical miles to leagues.",
  usage: ["nmitoleague <value>"],
  examples: ["nmitoleague 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Leagues",
  factor: 0.38359314934118083
});
