const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtosqmm",
  aliases: ["sqcmtosqmm"],
  title: "Square Centimeters To Square Millimeters",
  description: "Convert square centimeters to square millimeters.",
  usage: ["sqcmtosqmm <value>"],
  examples: ["sqcmtosqmm 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Square Millimeters",
  factor: 100.00000000000001
});
