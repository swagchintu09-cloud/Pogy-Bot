const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptoqt",
  aliases: ["cuptoqt"],
  title: "Cups To Quarts",
  description: "Convert cups to quarts.",
  usage: ["cuptoqt <value>"],
  examples: ["cuptoqt 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Quarts",
  factor: 0.25
});
