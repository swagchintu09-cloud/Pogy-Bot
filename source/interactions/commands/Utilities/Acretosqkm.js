const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqkm",
  aliases: ["acretosqkm"],
  title: "Acres To Square Kilometers",
  description: "Convert acres to square kilometers.",
  usage: ["acretosqkm <value>"],
  examples: ["acretosqkm 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Kilometers",
  factor: 0.0040468564224
});
