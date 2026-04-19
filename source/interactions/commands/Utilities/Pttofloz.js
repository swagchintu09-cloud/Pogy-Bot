const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttofloz",
  aliases: ["pttofloz"],
  title: "Pints To Fluid Ounces",
  description: "Convert pints to fluid ounces.",
  usage: ["pttofloz <value>"],
  examples: ["pttofloz 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Fluid Ounces",
  factor: 16
});
