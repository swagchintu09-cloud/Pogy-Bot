const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltol",
  aliases: ["mltol"],
  title: "Milliliters To Liters",
  description: "Convert milliliters to liters.",
  usage: ["mltol <value>"],
  examples: ["mltol 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Liters",
  factor: 0.001
});
