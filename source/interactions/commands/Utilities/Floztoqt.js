const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztoqt",
  aliases: ["floztoqt"],
  title: "Fluid Ounces To Quarts",
  description: "Convert fluid ounces to quarts.",
  usage: ["floztoqt <value>"],
  examples: ["floztoqt 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Quarts",
  factor: 0.03125
});
