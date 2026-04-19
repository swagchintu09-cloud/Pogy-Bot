const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetokm",
  aliases: ["leaguetokm"],
  title: "Leagues To Kilometers",
  description: "Convert leagues to kilometers.",
  usage: ["leaguetokm <value>"],
  examples: ["leaguetokm 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Kilometers",
  factor: 4.828032
});
