const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptofloz",
  aliases: ["tbsptofloz"],
  title: "Tablespoons To Fluid Ounces",
  description: "Convert tablespoons to fluid ounces.",
  usage: ["tbsptofloz <value>"],
  examples: ["tbsptofloz 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Fluid Ounces",
  factor: 0.5
});
