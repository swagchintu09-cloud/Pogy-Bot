const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetoin",
  aliases: ["leaguetoin"],
  title: "Leagues To Inches",
  description: "Convert leagues to inches.",
  usage: ["leaguetoin <value>"],
  examples: ["leaguetoin 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Inches",
  factor: 190080
});
