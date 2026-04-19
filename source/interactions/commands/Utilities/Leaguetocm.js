const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetocm",
  aliases: ["leaguetocm"],
  title: "Leagues To Centimeters",
  description: "Convert leagues to centimeters.",
  usage: ["leaguetocm <value>"],
  examples: ["leaguetocm 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Centimeters",
  factor: 482803.2
});
