const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtosqmm",
  aliases: ["sqmtosqmm"],
  title: "Square Meters To Square Millimeters",
  description: "Convert square meters to square millimeters.",
  usage: ["sqmtosqmm <value>"],
  examples: ["sqmtosqmm 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Square Millimeters",
  factor: 1000000
});
