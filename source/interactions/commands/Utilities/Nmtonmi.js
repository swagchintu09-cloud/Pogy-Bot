const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtonmi",
  aliases: ["nmtonmi"],
  title: "Nanometers To Nautical Miles",
  description: "Convert nanometers to nautical miles.",
  usage: ["nmtonmi <value>"],
  examples: ["nmtonmi 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Nautical Miles",
  factor: 5.399568034557235e-13
});
