const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttonmi",
  aliases: ["fttonmi"],
  title: "Feet To Nautical Miles",
  description: "Convert feet to nautical miles.",
  usage: ["fttonmi <value>"],
  examples: ["fttonmi 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Nautical Miles",
  factor: 0.00016457883369330455
});
