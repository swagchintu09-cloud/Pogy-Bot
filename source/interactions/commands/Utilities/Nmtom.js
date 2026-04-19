const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtom",
  aliases: ["nmtom"],
  title: "Nanometers To Meters",
  description: "Convert nanometers to meters.",
  usage: ["nmtom <value>"],
  examples: ["nmtom 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Meters",
  factor: 1e-9
});
