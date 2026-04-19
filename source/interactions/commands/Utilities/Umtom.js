const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtom",
  aliases: ["umtom"],
  title: "Micrometers To Meters",
  description: "Convert micrometers to meters.",
  usage: ["umtom <value>"],
  examples: ["umtom 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Meters",
  factor: 0.000001
});
