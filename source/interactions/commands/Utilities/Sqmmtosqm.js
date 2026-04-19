const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtosqm",
  aliases: ["sqmmtosqm"],
  title: "Square Millimeters To Square Meters",
  description: "Convert square millimeters to square meters.",
  usage: ["sqmmtosqm <value>"],
  examples: ["sqmmtosqm 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Square Meters",
  factor: 0.000001
});
