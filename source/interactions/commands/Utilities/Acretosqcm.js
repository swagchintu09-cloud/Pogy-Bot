const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqcm",
  aliases: ["acretosqcm"],
  title: "Acres To Square Centimeters",
  description: "Convert acres to square centimeters.",
  usage: ["acretosqcm <value>"],
  examples: ["acretosqcm 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Centimeters",
  factor: 40468564.224
});
