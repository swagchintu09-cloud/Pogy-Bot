const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtosqkm",
  aliases: ["sqcmtosqkm"],
  title: "Square Centimeters To Square Kilometers",
  description: "Convert square centimeters to square kilometers.",
  usage: ["sqcmtosqkm <value>"],
  examples: ["sqcmtosqkm 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Square Kilometers",
  factor: 1e-10
});
