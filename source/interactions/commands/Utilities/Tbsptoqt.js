const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptoqt",
  aliases: ["tbsptoqt"],
  title: "Tablespoons To Quarts",
  description: "Convert tablespoons to quarts.",
  usage: ["tbsptoqt <value>"],
  examples: ["tbsptoqt 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Quarts",
  factor: 0.015625
});
