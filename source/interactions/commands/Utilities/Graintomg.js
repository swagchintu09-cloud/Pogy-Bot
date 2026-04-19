const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintomg",
  aliases: ["graintomg"],
  title: "Grains To Milligrams",
  description: "Convert grains to milligrams.",
  usage: ["graintomg <value>"],
  examples: ["graintomg 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Milligrams",
  factor: 64.79890999999999
});
