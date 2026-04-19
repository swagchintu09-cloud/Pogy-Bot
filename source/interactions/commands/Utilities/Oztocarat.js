const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztocarat",
  aliases: ["oztocarat"],
  title: "Ounces To Carats",
  description: "Convert ounces to carats.",
  usage: ["oztocarat <value>"],
  examples: ["oztocarat 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Carats",
  factor: 141.747615625
});
