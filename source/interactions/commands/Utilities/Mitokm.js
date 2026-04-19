const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitokm",
  aliases: ["mitokm"],
  title: "Miles To Kilometers",
  description: "Convert miles to kilometers.",
  usage: ["mitokm <value>"],
  examples: ["mitokm 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Kilometers",
  factor: 1.609344
});
