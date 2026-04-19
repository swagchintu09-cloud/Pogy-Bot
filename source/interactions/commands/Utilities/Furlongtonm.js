const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtonm",
  aliases: ["furlongtonm"],
  title: "Furlongs To Nanometers",
  description: "Convert furlongs to nanometers.",
  usage: ["furlongtonm <value>"],
  examples: ["furlongtonm 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Nanometers",
  factor: 201168000000
});
