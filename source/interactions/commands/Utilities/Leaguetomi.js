const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetomi",
  aliases: ["leaguetomi"],
  title: "Leagues To Miles",
  description: "Convert leagues to miles.",
  usage: ["leaguetomi <value>"],
  examples: ["leaguetomi 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Miles",
  factor: 3
});
