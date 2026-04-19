const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtosqyd",
  aliases: ["sqkmtosqyd"],
  title: "Square Kilometers To Square Yards",
  description: "Convert square kilometers to square yards.",
  usage: ["sqkmtosqyd <value>"],
  examples: ["sqkmtosqyd 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Square Yards",
  factor: 1195990.0463010804
});
