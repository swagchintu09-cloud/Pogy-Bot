const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttosqm",
  aliases: ["sqfttosqm"],
  title: "Square Feet To Square Meters",
  description: "Convert square feet to square meters.",
  usage: ["sqfttosqm <value>"],
  examples: ["sqfttosqm 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Square Meters",
  factor: 0.09290304
});
