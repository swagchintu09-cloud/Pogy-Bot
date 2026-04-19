const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtonmi",
  aliases: ["cmtonmi"],
  title: "Centimeters To Nautical Miles",
  description: "Convert centimeters to nautical miles.",
  usage: ["cmtonmi <value>"],
  examples: ["cmtonmi 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Nautical Miles",
  factor: 0.000005399568034557236
});
