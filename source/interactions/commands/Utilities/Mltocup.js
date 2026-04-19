const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltocup",
  aliases: ["mltocup"],
  title: "Milliliters To Cups",
  description: "Convert milliliters to cups.",
  usage: ["mltocup <value>"],
  examples: ["mltocup 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Cups",
  factor: 0.004226752837730375
});
