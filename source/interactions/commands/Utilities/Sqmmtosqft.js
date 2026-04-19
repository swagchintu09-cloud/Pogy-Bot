const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtosqft",
  aliases: ["sqmmtosqft"],
  title: "Square Millimeters To Square Feet",
  description: "Convert square millimeters to square feet.",
  usage: ["sqmmtosqft <value>"],
  examples: ["sqmmtosqft 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Square Feet",
  factor: 0.000010763910416709721
});
