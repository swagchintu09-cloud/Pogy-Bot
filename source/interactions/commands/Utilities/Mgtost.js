const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtost",
  aliases: ["mgtost"],
  title: "Milligrams To Stone",
  description: "Convert milligrams to stone.",
  usage: ["mgtost <value>"],
  examples: ["mgtost 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Stone",
  factor: 1.5747304441776967e-7
});
