const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttosqkm",
  aliases: ["sqfttosqkm"],
  title: "Square Feet To Square Kilometers",
  description: "Convert square feet to square kilometers.",
  usage: ["sqfttosqkm <value>"],
  examples: ["sqfttosqkm 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Square Kilometers",
  factor: 9.290304000000001e-8
});
