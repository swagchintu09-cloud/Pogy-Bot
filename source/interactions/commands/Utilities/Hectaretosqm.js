const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqm",
  aliases: ["hectaretosqm"],
  title: "Hectares To Square Meters",
  description: "Convert hectares to square meters.",
  usage: ["hectaretosqm <value>"],
  examples: ["hectaretosqm 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Meters",
  factor: 10000
});
