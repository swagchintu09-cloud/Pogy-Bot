const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtonmi",
  aliases: ["rodtonmi"],
  title: "Rods To Nautical Miles",
  description: "Convert rods to nautical miles.",
  usage: ["rodtonmi <value>"],
  examples: ["rodtonmi 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Nautical Miles",
  factor: 0.002715550755939525
});
