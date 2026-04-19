const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hectaretoacre",
  aliases: ["hectaretoacre"],
  title: "Hectares To Acres",
  description: "Convert hectares to acres.",
  usage: ["hectaretoacre <value>"],
  examples: ["hectaretoacre 10"],
  group: "conversion",
  fromLabel: "Hectares",
  toLabel: "Acres",
  factor: 2.471053814671653
});
