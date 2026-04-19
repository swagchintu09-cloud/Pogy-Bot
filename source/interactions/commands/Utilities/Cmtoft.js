const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtoft",
  aliases: ["cmtoft"],
  title: "Centimeters To Feet",
  description: "Convert centimeters to feet.",
  usage: ["cmtoft <value>"],
  examples: ["cmtoft 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Feet",
  factor: 0.03280839895013123
});
