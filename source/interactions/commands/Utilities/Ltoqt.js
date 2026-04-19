const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltoqt",
  aliases: ["ltoqt"],
  title: "Liters To Quarts",
  description: "Convert liters to quarts.",
  usage: ["ltoqt <value>"],
  examples: ["ltoqt 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Quarts",
  factor: 1.0566882094325938
});
