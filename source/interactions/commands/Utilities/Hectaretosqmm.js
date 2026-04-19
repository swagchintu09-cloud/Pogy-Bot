const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqmm",
  aliases: ["hectaretosqmm"],
  title: "Hectares To Square Millimeters",
  description: "Convert hectares to square millimeters.",
  usage: ["hectaretosqmm <value>"],
  examples: ["hectaretosqmm 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Millimeters",
  factor: 10000000000
});
