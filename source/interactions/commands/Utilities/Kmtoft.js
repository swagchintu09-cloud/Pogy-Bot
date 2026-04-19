const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtoft",
  aliases: ["kmtoft"],
  title: "Kilometers To Feet",
  description: "Convert kilometers to feet.",
  usage: ["kmtoft <value>"],
  examples: ["kmtoft 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Feet",
  factor: 3280.839895013123
});
