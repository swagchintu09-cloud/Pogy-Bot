const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtosqmm",
  aliases: ["sqkmtosqmm"],
  title: "Square Kilometers To Square Millimeters",
  description: "Convert square kilometers to square millimeters.",
  usage: ["sqkmtosqmm <value>"],
  examples: ["sqkmtosqmm 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Square Millimeters",
  factor: 1000000000000
});
