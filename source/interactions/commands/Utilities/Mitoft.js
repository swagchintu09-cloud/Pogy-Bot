const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitoft",
  aliases: ["mitoft"],
  title: "Miles To Feet",
  description: "Convert miles to feet.",
  usage: ["mitoft <value>"],
  examples: ["mitoft 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Feet",
  factor: 5280
});
