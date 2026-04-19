const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintocarat",
  aliases: ["graintocarat"],
  title: "Grains To Carats",
  description: "Convert grains to carats.",
  usage: ["graintocarat <value>"],
  examples: ["graintocarat 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Carats",
  factor: 0.32399454999999994
});
