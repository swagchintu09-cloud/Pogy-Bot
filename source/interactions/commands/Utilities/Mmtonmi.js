const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtonmi",
  aliases: ["mmtonmi"],
  title: "Millimeters To Nautical Miles",
  description: "Convert millimeters to nautical miles.",
  usage: ["mmtonmi <value>"],
  examples: ["mmtonmi 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Nautical Miles",
  factor: 5.399568034557235e-7
});
