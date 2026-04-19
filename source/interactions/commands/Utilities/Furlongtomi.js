const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtomi",
  aliases: ["furlongtomi"],
  title: "Furlongs To Miles",
  description: "Convert furlongs to miles.",
  usage: ["furlongtomi <value>"],
  examples: ["furlongtomi 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Miles",
  factor: 0.125
});
