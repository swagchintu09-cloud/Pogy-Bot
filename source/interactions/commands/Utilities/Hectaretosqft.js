const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretosqft",
  aliases: ["hectaretosqft"],
  title: "Hectares To Square Feet",
  description: "Convert hectares to square feet.",
  usage: ["hectaretosqft <value>"],
  examples: ["hectaretosqft 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Square Feet",
  factor: 107639.10416709722
});
