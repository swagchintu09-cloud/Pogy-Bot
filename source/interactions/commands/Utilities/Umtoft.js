const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtoft",
  aliases: ["umtoft"],
  title: "Micrometers To Feet",
  description: "Convert micrometers to feet.",
  usage: ["umtoft <value>"],
  examples: ["umtoft 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Feet",
  factor: 0.000003280839895013123
});
