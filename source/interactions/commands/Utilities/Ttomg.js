const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttomg",
  aliases: ["ttomg"],
  title: "Metric Tons To Milligrams",
  description: "Convert metric tons to milligrams.",
  usage: ["ttomg <value>"],
  examples: ["ttomg 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Milligrams",
  factor: 1000000000
});
