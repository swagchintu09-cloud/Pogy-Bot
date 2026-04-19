const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttorod",
  aliases: ["fttorod"],
  title: "Feet To Rods",
  description: "Convert feet to rods.",
  usage: ["fttorod <value>"],
  examples: ["fttorod 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Rods",
  factor: 0.06060606060606061
});
