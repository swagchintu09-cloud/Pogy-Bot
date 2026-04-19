const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattog",
  aliases: ["carattog"],
  title: "Carats To Grams",
  description: "Convert carats to grams.",
  usage: ["carattog <value>"],
  examples: ["carattog 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Grams",
  factor: 0.2
});
