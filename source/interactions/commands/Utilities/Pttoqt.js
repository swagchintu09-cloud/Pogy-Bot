const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttoqt",
  aliases: ["pttoqt"],
  title: "Pints To Quarts",
  description: "Convert pints to quarts.",
  usage: ["pttoqt <value>"],
  examples: ["pttoqt 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Quarts",
  factor: 0.5
});
