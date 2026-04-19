const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltopt",
  aliases: ["mltopt"],
  title: "Milliliters To Pints",
  description: "Convert milliliters to pints.",
  usage: ["mltopt <value>"],
  examples: ["mltopt 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Pints",
  factor: 0.0021133764188651875
});
