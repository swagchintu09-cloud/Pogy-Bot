const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqyd",
  aliases: ["hectaretosqyd"],
  title: "Hectares To Square Yards",
  description: "Convert hectares to square yards.",
  usage: ["hectaretosqyd <value>"],
  examples: ["hectaretosqyd 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Yards",
  factor: 11959.900463010803
});
