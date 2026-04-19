const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtonmi",
  aliases: ["kmtonmi"],
  title: "Kilometers To Nautical Miles",
  description: "Convert kilometers to nautical miles.",
  usage: ["kmtonmi <value>"],
  examples: ["kmtonmi 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Nautical Miles",
  factor: 0.5399568034557235
});
