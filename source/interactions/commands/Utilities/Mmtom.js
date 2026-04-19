const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtom",
  aliases: ["mmtom"],
  title: "Millimeters To Meters",
  description: "Convert millimeters to meters.",
  usage: ["mmtom <value>"],
  examples: ["mmtom 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Meters",
  factor: 0.001
});
