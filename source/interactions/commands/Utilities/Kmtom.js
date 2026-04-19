const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtom",
  aliases: ["kmtom"],
  title: "Kilometers To Meters",
  description: "Convert kilometers to meters.",
  usage: ["kmtom <value>"],
  examples: ["kmtom 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Meters",
  factor: 1000
});
