const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttooz",
  aliases: ["ttooz"],
  title: "Metric Tons To Ounces",
  description: "Convert metric tons to ounces.",
  usage: ["ttooz <value>"],
  examples: ["ttooz 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Ounces",
  factor: 35273.961949580415
});
