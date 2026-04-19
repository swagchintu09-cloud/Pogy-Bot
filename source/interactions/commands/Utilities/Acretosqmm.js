const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqmm",
  aliases: ["acretosqmm"],
  title: "Acres To Square Millimeters",
  description: "Convert acres to square millimeters.",
  usage: ["acretosqmm <value>"],
  examples: ["acretosqmm 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Millimeters",
  factor: 4046856422.4000006
});
