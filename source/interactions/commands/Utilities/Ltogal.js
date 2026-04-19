const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltogal",
  aliases: ["ltogal"],
  title: "Liters To Gallons",
  description: "Convert liters to gallons.",
  usage: ["ltogal <value>"],
  examples: ["ltogal 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Gallons",
  factor: 0.26417205235814845
});
