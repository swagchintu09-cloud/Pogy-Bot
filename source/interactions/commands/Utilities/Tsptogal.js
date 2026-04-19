const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptogal",
  aliases: ["tsptogal"],
  title: "Teaspoons To Gallons",
  description: "Convert teaspoons to gallons.",
  usage: ["tsptogal <value>"],
  examples: ["tsptogal 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Gallons",
  factor: 0.0013020833333333333
});
