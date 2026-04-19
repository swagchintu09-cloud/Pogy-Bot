const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptol",
  aliases: ["tbsptol"],
  title: "Tablespoons To Liters",
  description: "Convert tablespoons to liters.",
  usage: ["tbsptol <value>"],
  examples: ["tbsptol 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Liters",
  factor: 0.01478676478125
});
