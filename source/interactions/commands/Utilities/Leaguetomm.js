const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetomm",
  aliases: ["leaguetomm"],
  title: "Leagues To Millimeters",
  description: "Convert leagues to millimeters.",
  usage: ["leaguetomm <value>"],
  examples: ["leaguetomm 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Millimeters",
  factor: 4828032
});
