const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtoin",
  aliases: ["furlongtoin"],
  title: "Furlongs To Inches",
  description: "Convert furlongs to inches.",
  usage: ["furlongtoin <value>"],
  examples: ["furlongtoin 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Inches",
  factor: 7920.000000000001
});
