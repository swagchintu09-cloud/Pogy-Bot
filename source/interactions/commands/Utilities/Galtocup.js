const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtocup",
  aliases: ["galtocup"],
  title: "Gallons To Cups",
  description: "Convert gallons to cups.",
  usage: ["galtocup <value>"],
  examples: ["galtocup 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Cups",
  factor: 16
});
