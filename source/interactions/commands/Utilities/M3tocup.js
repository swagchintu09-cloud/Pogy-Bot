const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3tocup",
  aliases: ["m3tocup"],
  title: "Cubic Meters To Cups",
  description: "Convert cubic meters to cups.",
  usage: ["m3tocup <value>"],
  examples: ["m3tocup 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Cups",
  factor: 4226.752837730375
});
