const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtosqcm",
  aliases: ["sqmtosqcm"],
  title: "Square Meters To Square Centimeters",
  description: "Convert square meters to square centimeters.",
  usage: ["sqmtosqcm <value>"],
  examples: ["sqmtosqcm 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Square Centimeters",
  factor: 10000
});
