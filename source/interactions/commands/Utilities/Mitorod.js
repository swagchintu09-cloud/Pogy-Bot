const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitorod",
  aliases: ["mitorod"],
  title: "Miles To Rods",
  description: "Convert miles to rods.",
  usage: ["mitorod <value>"],
  examples: ["mitorod 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Rods",
  factor: 320
});
