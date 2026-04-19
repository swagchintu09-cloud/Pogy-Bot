const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtosqyd",
  aliases: ["sqcmtosqyd"],
  title: "Square Centimeters To Square Yards",
  description: "Convert square centimeters to square yards.",
  usage: ["sqcmtosqyd <value>"],
  examples: ["sqcmtosqyd 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Square Yards",
  factor: 0.00011959900463010803
});
