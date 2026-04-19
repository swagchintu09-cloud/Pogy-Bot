const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtom",
  aliases: ["rodtom"],
  title: "Rods To Meters",
  description: "Convert rods to meters.",
  usage: ["rodtom <value>"],
  examples: ["rodtom 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Meters",
  factor: 5.0292
});
