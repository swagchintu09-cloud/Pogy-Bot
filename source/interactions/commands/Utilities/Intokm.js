const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intokm",
  aliases: ["intokm"],
  title: "Inches To Kilometers",
  description: "Convert inches to kilometers.",
  usage: ["intokm <value>"],
  examples: ["intokm 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Kilometers",
  factor: 0.000025399999999999997
});
