const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztoml",
  aliases: ["floztoml"],
  title: "Fluid Ounces To Milliliters",
  description: "Convert fluid ounces to milliliters.",
  usage: ["floztoml <value>"],
  examples: ["floztoml 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Milliliters",
  factor: 29.5735295625
});
