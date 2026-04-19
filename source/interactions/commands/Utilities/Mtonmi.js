const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtonmi",
  aliases: ["mtonmi"],
  title: "Meters To Nautical Miles",
  description: "Convert meters to nautical miles.",
  usage: ["mtonmi <value>"],
  examples: ["mtonmi 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Nautical Miles",
  factor: 0.0005399568034557236
});
