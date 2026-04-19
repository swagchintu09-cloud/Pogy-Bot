const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptopt",
  aliases: ["tbsptopt"],
  title: "Tablespoons To Pints",
  description: "Convert tablespoons to pints.",
  usage: ["tbsptopt <value>"],
  examples: ["tbsptopt 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Pints",
  factor: 0.03125
});
