const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtosqkm",
  aliases: ["sqydtosqkm"],
  title: "Square Yards To Square Kilometers",
  description: "Convert square yards to square kilometers.",
  usage: ["sqydtosqkm <value>"],
  examples: ["sqydtosqkm 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Square Kilometers",
  factor: 8.3612736e-7
});
