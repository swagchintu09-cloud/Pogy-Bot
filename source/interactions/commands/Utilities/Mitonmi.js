const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitonmi",
  aliases: ["mitonmi"],
  title: "Miles To Nautical Miles",
  description: "Convert miles to nautical miles.",
  usage: ["mitonmi <value>"],
  examples: ["mitonmi 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Nautical Miles",
  factor: 0.8689762419006479
});
