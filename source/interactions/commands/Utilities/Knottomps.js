const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "knottomps",
  aliases: ["knottomps"],
  title: "Knots To Meters/Second",
  description: "Convert knots to meters/second.",
  usage: ["knottomps <value>"],
  examples: ["knottomps 10"],
  group: "conversion",
  fromLabel: "Knots",
  toLabel: "Meters/Second",
  factor: 0.5144444444
});
