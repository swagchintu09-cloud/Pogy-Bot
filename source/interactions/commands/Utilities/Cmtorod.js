const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtorod",
  aliases: ["cmtorod"],
  title: "Centimeters To Rods",
  description: "Convert centimeters to rods.",
  usage: ["cmtorod <value>"],
  examples: ["cmtorod 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Rods",
  factor: 0.0019883878151594685
});
