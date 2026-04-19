const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtosqyd",
  aliases: ["sqmmtosqyd"],
  title: "Square Millimeters To Square Yards",
  description: "Convert square millimeters to square yards.",
  usage: ["sqmmtosqyd <value>"],
  examples: ["sqmmtosqyd 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Square Yards",
  factor: 0.0000011959900463010801
});
