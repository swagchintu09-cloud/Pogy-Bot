const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptogal",
  aliases: ["tbsptogal"],
  title: "Tablespoons To Gallons",
  description: "Convert tablespoons to gallons.",
  usage: ["tbsptogal <value>"],
  examples: ["tbsptogal 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Gallons",
  factor: 0.00390625
});
