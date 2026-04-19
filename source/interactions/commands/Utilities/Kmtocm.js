const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtocm",
  aliases: ["kmtocm"],
  title: "Kilometers To Centimeters",
  description: "Convert kilometers to centimeters.",
  usage: ["kmtocm <value>"],
  examples: ["kmtocm 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Centimeters",
  factor: 100000
});
