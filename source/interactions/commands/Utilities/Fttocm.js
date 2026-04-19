const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttocm",
  aliases: ["fttocm"],
  title: "Feet To Centimeters",
  description: "Convert feet to centimeters.",
  usage: ["fttocm <value>"],
  examples: ["fttocm 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Centimeters",
  factor: 30.48
});
