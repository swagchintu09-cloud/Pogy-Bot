const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtosqft",
  aliases: ["sqcmtosqft"],
  title: "Square Centimeters To Square Feet",
  description: "Convert square centimeters to square feet.",
  usage: ["sqcmtosqft <value>"],
  examples: ["sqcmtosqft 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Square Feet",
  factor: 0.0010763910416709721
});
