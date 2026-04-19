const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintoft",
  aliases: ["chaintoft"],
  title: "Chains To Feet",
  description: "Convert chains to feet.",
  usage: ["chaintoft <value>"],
  examples: ["chaintoft 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Feet",
  factor: 66
});
