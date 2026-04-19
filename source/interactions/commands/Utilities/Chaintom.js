const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintom",
  aliases: ["chaintom"],
  title: "Chains To Meters",
  description: "Convert chains to meters.",
  usage: ["chaintom <value>"],
  examples: ["chaintom 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Meters",
  factor: 20.1168
});
