const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intomi",
  aliases: ["intomi"],
  title: "Inches To Miles",
  description: "Convert inches to miles.",
  usage: ["intomi <value>"],
  examples: ["intomi 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Miles",
  factor: 0.000015782828282828283
});
