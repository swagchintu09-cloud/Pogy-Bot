const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttoyd",
  aliases: ["fttoyd"],
  title: "Feet To Yards",
  description: "Convert feet to yards.",
  usage: ["fttoyd <value>"],
  examples: ["fttoyd 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Yards",
  factor: 0.33333333333333337
});
