const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtoin",
  aliases: ["rodtoin"],
  title: "Rods To Inches",
  description: "Convert rods to inches.",
  usage: ["rodtoin <value>"],
  examples: ["rodtoin 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Inches",
  factor: 198.00000000000003
});
