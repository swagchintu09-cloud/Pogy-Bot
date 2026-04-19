const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "knottofps",
  aliases: ["knottofps"],
  title: "Knots To Feet/Second",
  description: "Convert knots to feet/second.",
  usage: ["knottofps <value>"],
  examples: ["knottofps 10"],
  group: "conversion",
  fromLabel: "Knots",
  toLabel: "Feet/Second",
  factor: 1.6878098569553805
});
