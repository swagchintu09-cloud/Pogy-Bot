const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptotsp",
  aliases: ["tbsptotsp"],
  title: "Tablespoons To Teaspoons",
  description: "Convert tablespoons to teaspoons.",
  usage: ["tbsptotsp <value>"],
  examples: ["tbsptotsp 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Teaspoons",
  factor: 3
});
