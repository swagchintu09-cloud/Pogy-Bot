const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttotsp",
  aliases: ["pttotsp"],
  title: "Pints To Teaspoons",
  description: "Convert pints to teaspoons.",
  usage: ["pttotsp <value>"],
  examples: ["pttotsp 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Teaspoons",
  factor: 96
});
