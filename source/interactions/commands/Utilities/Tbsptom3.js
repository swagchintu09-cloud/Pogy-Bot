const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptom3",
  aliases: ["tbsptom3"],
  title: "Tablespoons To Cubic Meters",
  description: "Convert tablespoons to cubic meters.",
  usage: ["tbsptom3 <value>"],
  examples: ["tbsptom3 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Cubic Meters",
  factor: 0.000014786764781249999
});
