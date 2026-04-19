const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "knottokph",
  aliases: ["knottokph"],
  title: "Knots To Kilometers/Hour",
  description: "Convert knots to kilometers/hour.",
  usage: ["knottokph <value>"],
  examples: ["knottokph 10"],
  group: "conversion",
  fromLabel: "Knots",
  toLabel: "Kilometers/Hour",
  factor: 1.85199999969184
});
