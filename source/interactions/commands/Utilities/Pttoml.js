const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttoml",
  aliases: ["pttoml"],
  title: "Pints To Milliliters",
  description: "Convert pints to milliliters.",
  usage: ["pttoml <value>"],
  examples: ["pttoml 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Milliliters",
  factor: 473.176473
});
