const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttosqyd",
  aliases: ["sqfttosqyd"],
  title: "Square Feet To Square Yards",
  description: "Convert square feet to square yards.",
  usage: ["sqfttosqyd <value>"],
  examples: ["sqfttosqyd 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Square Yards",
  factor: 0.11111111111111112
});
