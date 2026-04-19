const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtocm",
  aliases: ["ydtocm"],
  title: "Yards To Centimeters",
  description: "Convert yards to centimeters.",
  usage: ["ydtocm <value>"],
  examples: ["ydtocm 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Centimeters",
  factor: 91.44
});
