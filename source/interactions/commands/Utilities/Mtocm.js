const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtocm",
  aliases: ["mtocm"],
  title: "Meters To Centimeters",
  description: "Convert meters to centimeters.",
  usage: ["mtocm <value>"],
  examples: ["mtocm 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Centimeters",
  factor: 100
});
