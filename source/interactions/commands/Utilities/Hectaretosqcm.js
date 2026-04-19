const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqcm",
  aliases: ["hectaretosqcm"],
  title: "Hectares To Square Centimeters",
  description: "Convert hectares to square centimeters.",
  usage: ["hectaretosqcm <value>"],
  examples: ["hectaretosqcm 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Centimeters",
  factor: 100000000
});
