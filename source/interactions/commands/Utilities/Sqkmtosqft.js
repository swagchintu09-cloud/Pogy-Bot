const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtosqft",
  aliases: ["sqkmtosqft"],
  title: "Square Kilometers To Square Feet",
  description: "Convert square kilometers to square feet.",
  usage: ["sqkmtosqft <value>"],
  examples: ["sqkmtosqft 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Square Feet",
  factor: 10763910.416709721
});
