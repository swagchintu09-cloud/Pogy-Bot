const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "knottomph",
  aliases: ["knottomph"],
  title: "Knots To Miles/Hour",
  description: "Convert knots to miles/hour.",
  usage: ["knottomph <value>"],
  examples: ["knottomph 10"],
  group: "conversion",
  fromLabel: "Knots",
  toLabel: "Miles/Hour",
  factor: 1.1507794479241231
});
