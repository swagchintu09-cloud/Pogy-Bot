const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtorod",
  aliases: ["umtorod"],
  title: "Micrometers To Rods",
  description: "Convert micrometers to rods.",
  usage: ["umtorod <value>"],
  examples: ["umtorod 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Rods",
  factor: 1.9883878151594685e-7
});
