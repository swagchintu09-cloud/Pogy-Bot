const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtosqm",
  aliases: ["sqkmtosqm"],
  title: "Square Kilometers To Square Meters",
  description: "Convert square kilometers to square meters.",
  usage: ["sqkmtosqm <value>"],
  examples: ["sqkmtosqm 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Square Meters",
  factor: 1000000
});
