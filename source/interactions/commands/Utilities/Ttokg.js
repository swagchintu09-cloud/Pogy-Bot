const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttokg",
  aliases: ["ttokg"],
  title: "Metric Tons To Kilograms",
  description: "Convert metric tons to kilograms.",
  usage: ["ttokg <value>"],
  examples: ["ttokg 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Kilograms",
  factor: 1000
});
