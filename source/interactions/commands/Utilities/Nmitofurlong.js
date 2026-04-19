const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitofurlong",
  aliases: ["nmitofurlong"],
  title: "Nautical Miles To Furlongs",
  description: "Convert nautical miles to furlongs.",
  usage: ["nmitofurlong <value>"],
  examples: ["nmitofurlong 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Furlongs",
  factor: 9.20623558418834
});
