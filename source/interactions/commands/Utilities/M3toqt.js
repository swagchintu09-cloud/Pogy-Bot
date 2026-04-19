const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3toqt",
  aliases: ["m3toqt"],
  title: "Cubic Meters To Quarts",
  description: "Convert cubic meters to quarts.",
  usage: ["m3toqt <value>"],
  examples: ["m3toqt 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Quarts",
  factor: 1056.6882094325938
});
