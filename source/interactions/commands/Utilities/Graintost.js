const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintost",
  aliases: ["graintost"],
  title: "Grains To Stone",
  description: "Convert grains to stone.",
  usage: ["graintost <value>"],
  examples: ["graintost 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Stone",
  factor: 0.00001020408163265306
});
