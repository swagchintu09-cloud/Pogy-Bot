const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltoml",
  aliases: ["ltoml"],
  title: "Liters To Milliliters",
  description: "Convert liters to milliliters.",
  usage: ["ltoml <value>"],
  examples: ["ltoml 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Milliliters",
  factor: 1000
});
