const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttom3",
  aliases: ["qttom3"],
  title: "Quarts To Cubic Meters",
  description: "Convert quarts to cubic meters.",
  usage: ["qttom3 <value>"],
  examples: ["qttom3 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Cubic Meters",
  factor: 0.0009463529459999999
});
