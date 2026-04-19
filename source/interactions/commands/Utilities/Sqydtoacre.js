const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtoacre",
  aliases: ["sqydtoacre"],
  title: "Square Yards To Acres",
  description: "Convert square yards to acres.",
  usage: ["sqydtoacre <value>"],
  examples: ["sqydtoacre 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Acres",
  factor: 0.00020661157024793388
});
