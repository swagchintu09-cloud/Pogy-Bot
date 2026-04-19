const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtocm",
  aliases: ["umtocm"],
  title: "Micrometers To Centimeters",
  description: "Convert micrometers to centimeters.",
  usage: ["umtocm <value>"],
  examples: ["umtocm 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Centimeters",
  factor: 0.00009999999999999999
});
