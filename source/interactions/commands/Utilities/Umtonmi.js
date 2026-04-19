const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtonmi",
  aliases: ["umtonmi"],
  title: "Micrometers To Nautical Miles",
  description: "Convert micrometers to nautical miles.",
  usage: ["umtonmi <value>"],
  examples: ["umtonmi 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Nautical Miles",
  factor: 5.399568034557235e-10
});
