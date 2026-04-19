const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtosqkm",
  aliases: ["sqmtosqkm"],
  title: "Square Meters To Square Kilometers",
  description: "Convert square meters to square kilometers.",
  usage: ["sqmtosqkm <value>"],
  examples: ["sqmtosqkm 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Square Kilometers",
  factor: 0.000001
});
