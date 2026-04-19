const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttogal",
  aliases: ["qttogal"],
  title: "Quarts To Gallons",
  description: "Convert quarts to gallons.",
  usage: ["qttogal <value>"],
  examples: ["qttogal 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Gallons",
  factor: 0.25
});
