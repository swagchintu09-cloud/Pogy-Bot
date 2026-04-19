const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintoin",
  aliases: ["chaintoin"],
  title: "Chains To Inches",
  description: "Convert chains to inches.",
  usage: ["chaintoin <value>"],
  examples: ["chaintoin 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Inches",
  factor: 792.0000000000001
});
