const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtooz",
  aliases: ["kgtooz"],
  title: "Kilograms To Ounces",
  description: "Convert kilograms to ounces.",
  usage: ["kgtooz <value>"],
  examples: ["kgtooz 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Ounces",
  factor: 35.27396194958041
});
