const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattooz",
  aliases: ["carattooz"],
  title: "Carats To Ounces",
  description: "Convert carats to ounces.",
  usage: ["carattooz <value>"],
  examples: ["carattooz 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Ounces",
  factor: 0.007054792389916083
});
