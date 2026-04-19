const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqkm",
  aliases: ["hectaretosqkm"],
  title: "Hectares To Square Kilometers",
  description: "Convert hectares to square kilometers.",
  usage: ["hectaretosqkm <value>"],
  examples: ["hectaretosqkm 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Kilometers",
  factor: 0.01
});
