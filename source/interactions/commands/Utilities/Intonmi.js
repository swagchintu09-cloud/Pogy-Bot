const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intonmi",
  aliases: ["intonmi"],
  title: "Inches To Nautical Miles",
  description: "Convert inches to nautical miles.",
  usage: ["intonmi <value>"],
  examples: ["intonmi 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Nautical Miles",
  factor: 0.000013714902807775378
});
