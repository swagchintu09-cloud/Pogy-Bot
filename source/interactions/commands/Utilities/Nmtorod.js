const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtorod",
  aliases: ["nmtorod"],
  title: "Nanometers To Rods",
  description: "Convert nanometers to rods.",
  usage: ["nmtorod <value>"],
  examples: ["nmtorod 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Rods",
  factor: 1.9883878151594687e-10
});
