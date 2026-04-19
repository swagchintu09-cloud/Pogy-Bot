const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttosqmm",
  aliases: ["sqfttosqmm"],
  title: "Square Feet To Square Millimeters",
  description: "Convert square feet to square millimeters.",
  usage: ["sqfttosqmm <value>"],
  examples: ["sqfttosqmm 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Square Millimeters",
  factor: 92903.04000000001
});
