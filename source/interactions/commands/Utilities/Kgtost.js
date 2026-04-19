const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtost",
  aliases: ["kgtost"],
  title: "Kilograms To Stone",
  description: "Convert kilograms to stone.",
  usage: ["kgtost <value>"],
  examples: ["kgtost 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Stone",
  factor: 0.1574730444177697
});
