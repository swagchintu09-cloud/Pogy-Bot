const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtokm",
  aliases: ["umtokm"],
  title: "Micrometers To Kilometers",
  description: "Convert micrometers to kilometers.",
  usage: ["umtokm <value>"],
  examples: ["umtokm 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Kilometers",
  factor: 9.999999999999999e-10
});
