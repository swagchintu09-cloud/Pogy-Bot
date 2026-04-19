const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintomi",
  aliases: ["chaintomi"],
  title: "Chains To Miles",
  description: "Convert chains to miles.",
  usage: ["chaintomi <value>"],
  examples: ["chaintomi 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Miles",
  factor: 0.0125
});
