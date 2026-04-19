const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintokm",
  aliases: ["chaintokm"],
  title: "Chains To Kilometers",
  description: "Convert chains to kilometers.",
  usage: ["chaintokm <value>"],
  examples: ["chaintokm 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Kilometers",
  factor: 0.0201168
});
