const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitocm",
  aliases: ["mitocm"],
  title: "Miles To Centimeters",
  description: "Convert miles to centimeters.",
  usage: ["mitocm <value>"],
  examples: ["mitocm 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Centimeters",
  factor: 160934.4
});
