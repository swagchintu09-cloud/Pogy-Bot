const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intoleague",
  aliases: ["intoleague"],
  title: "Inches To Leagues",
  description: "Convert inches to leagues.",
  usage: ["intoleague <value>"],
  examples: ["intoleague 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Leagues",
  factor: 0.00000526094276094276
});
