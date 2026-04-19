const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtoin",
  aliases: ["nmtoin"],
  title: "Nanometers To Inches",
  description: "Convert nanometers to inches.",
  usage: ["nmtoin <value>"],
  examples: ["nmtoin 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Inches",
  factor: 3.9370078740157486e-8
});
