const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtorod",
  aliases: ["furlongtorod"],
  title: "Furlongs To Rods",
  description: "Convert furlongs to rods.",
  usage: ["furlongtorod <value>"],
  examples: ["furlongtorod 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Rods",
  factor: 40
});
