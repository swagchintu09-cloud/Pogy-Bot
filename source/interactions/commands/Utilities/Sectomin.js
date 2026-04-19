const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectomin",
  aliases: ["sectomin"],
  title: "Seconds To Minutes",
  description: "Convert seconds to minutes.",
  usage: ["sectomin <value>"],
  examples: ["sectomin 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Minutes",
  factor: 0.016666666666666666
});
