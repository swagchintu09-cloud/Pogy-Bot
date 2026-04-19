const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtosqcm",
  aliases: ["sqkmtosqcm"],
  title: "Square Kilometers To Square Centimeters",
  description: "Convert square kilometers to square centimeters.",
  usage: ["sqkmtosqcm <value>"],
  examples: ["sqkmtosqcm 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Square Centimeters",
  factor: 10000000000
});
