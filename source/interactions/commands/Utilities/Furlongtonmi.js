const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtonmi",
  aliases: ["furlongtonmi"],
  title: "Furlongs To Nautical Miles",
  description: "Convert furlongs to nautical miles.",
  usage: ["furlongtonmi <value>"],
  examples: ["furlongtonmi 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Nautical Miles",
  factor: 0.10862203023758099
});
