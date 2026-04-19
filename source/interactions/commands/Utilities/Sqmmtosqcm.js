const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtosqcm",
  aliases: ["sqmmtosqcm"],
  title: "Square Millimeters To Square Centimeters",
  description: "Convert square millimeters to square centimeters.",
  usage: ["sqmmtosqcm <value>"],
  examples: ["sqmmtosqcm 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Square Centimeters",
  factor: 0.009999999999999998
});
