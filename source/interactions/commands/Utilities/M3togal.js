const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3togal",
  aliases: ["m3togal"],
  title: "Cubic Meters To Gallons",
  description: "Convert cubic meters to gallons.",
  usage: ["m3togal <value>"],
  examples: ["m3togal 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Gallons",
  factor: 264.17205235814845
});
