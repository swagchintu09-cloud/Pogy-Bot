const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtosqkm",
  aliases: ["sqmmtosqkm"],
  title: "Square Millimeters To Square Kilometers",
  description: "Convert square millimeters to square kilometers.",
  usage: ["sqmmtosqkm <value>"],
  examples: ["sqmmtosqkm 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Square Kilometers",
  factor: 1e-12
});
