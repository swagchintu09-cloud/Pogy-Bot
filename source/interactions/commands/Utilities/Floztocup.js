const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztocup",
  aliases: ["floztocup"],
  title: "Fluid Ounces To Cups",
  description: "Convert fluid ounces to cups.",
  usage: ["floztocup <value>"],
  examples: ["floztocup 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Cups",
  factor: 0.125
});
