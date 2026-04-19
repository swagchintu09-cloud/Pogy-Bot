const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtocm",
  aliases: ["nmtocm"],
  title: "Nanometers To Centimeters",
  description: "Convert nanometers to centimeters.",
  usage: ["nmtocm <value>"],
  examples: ["nmtocm 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Centimeters",
  factor: 1.0000000000000001e-7
});
