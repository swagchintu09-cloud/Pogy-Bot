const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtonm",
  aliases: ["cmtonm"],
  title: "Centimeters To Nanometers",
  description: "Convert centimeters to nanometers.",
  usage: ["cmtonm <value>"],
  examples: ["cmtonm 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Nanometers",
  factor: 10000000
});
