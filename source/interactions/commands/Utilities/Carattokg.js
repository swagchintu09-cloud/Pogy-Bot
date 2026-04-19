const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattokg",
  aliases: ["carattokg"],
  title: "Carats To Kilograms",
  description: "Convert carats to kilograms.",
  usage: ["carattokg <value>"],
  examples: ["carattokg 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Kilograms",
  factor: 0.0002
});
