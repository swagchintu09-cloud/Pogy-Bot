const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intorod",
  aliases: ["intorod"],
  title: "Inches To Rods",
  description: "Convert inches to rods.",
  usage: ["intorod <value>"],
  examples: ["intorod 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Rods",
  factor: 0.00505050505050505
});
