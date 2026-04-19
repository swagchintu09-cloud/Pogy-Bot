const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtooz",
  aliases: ["mgtooz"],
  title: "Milligrams To Ounces",
  description: "Convert milligrams to ounces.",
  usage: ["mgtooz <value>"],
  examples: ["mgtooz 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Ounces",
  factor: 0.00003527396194958041
});
