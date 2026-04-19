const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttosqcm",
  aliases: ["sqfttosqcm"],
  title: "Square Feet To Square Centimeters",
  description: "Convert square feet to square centimeters.",
  usage: ["sqfttosqcm <value>"],
  examples: ["sqfttosqcm 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Square Centimeters",
  factor: 929.0304
});
