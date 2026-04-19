const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mphtoknot",
  aliases: ["mphtoknot"],
  title: "Miles/Hour To Knots",
  description: "Convert miles/hour to knots.",
  usage: ["mphtoknot <value>"],
  examples: ["mphtoknot 10"],
  group: "conversion",
  fromLabel: "Miles/Hour",
  toLabel: "Knots",
  factor: 0.8689762419757214
});
