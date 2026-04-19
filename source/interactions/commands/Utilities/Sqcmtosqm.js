const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtosqm",
  aliases: ["sqcmtosqm"],
  title: "Square Centimeters To Square Meters",
  description: "Convert square centimeters to square meters.",
  usage: ["sqcmtosqm <value>"],
  examples: ["sqcmtosqm 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Square Meters",
  factor: 0.0001
});
