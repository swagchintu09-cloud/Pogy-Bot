const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttocarat",
  aliases: ["ttocarat"],
  title: "Metric Tons To Carats",
  description: "Convert metric tons to carats.",
  usage: ["ttocarat <value>"],
  examples: ["ttocarat 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Carats",
  factor: 5000000
});
