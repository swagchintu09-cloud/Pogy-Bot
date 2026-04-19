const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltocup",
  aliases: ["ltocup"],
  title: "Liters To Cups",
  description: "Convert liters to cups.",
  usage: ["ltocup <value>"],
  examples: ["ltocup 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Cups",
  factor: 4.226752837730375
});
