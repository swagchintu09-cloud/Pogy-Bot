const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtosqyd",
  aliases: ["sqmtosqyd"],
  title: "Square Meters To Square Yards",
  description: "Convert square meters to square yards.",
  usage: ["sqmtosqyd <value>"],
  examples: ["sqmtosqyd 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Square Yards",
  factor: 1.1959900463010802
});
