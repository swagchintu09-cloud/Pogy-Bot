const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtorod",
  aliases: ["mmtorod"],
  title: "Millimeters To Rods",
  description: "Convert millimeters to rods.",
  usage: ["mmtorod <value>"],
  examples: ["mmtorod 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Rods",
  factor: 0.00019883878151594686
});
