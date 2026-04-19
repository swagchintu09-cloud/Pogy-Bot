const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetom",
  aliases: ["leaguetom"],
  title: "Leagues To Meters",
  description: "Convert leagues to meters.",
  usage: ["leaguetom <value>"],
  examples: ["leaguetom 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Meters",
  factor: 4828.032
});
