const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqyd",
  aliases: ["acretosqyd"],
  title: "Acres To Square Yards",
  description: "Convert acres to square yards.",
  usage: ["acretosqyd <value>"],
  examples: ["acretosqyd 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Yards",
  factor: 4840
});
