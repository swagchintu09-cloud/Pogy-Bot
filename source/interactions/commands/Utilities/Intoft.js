const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intoft",
  aliases: ["intoft"],
  title: "Inches To Feet",
  description: "Convert inches to feet.",
  usage: ["intoft <value>"],
  examples: ["intoft 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Feet",
  factor: 0.08333333333333333
});
