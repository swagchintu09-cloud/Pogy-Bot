const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fpstoknot",
  aliases: ["fpstoknot"],
  title: "Feet/Second To Knots",
  description: "Convert feet/second to knots.",
  usage: ["fpstoknot <value>"],
  examples: ["fpstoknot 10"],
  group: "conversion",
  fromLabel: "Feet/Second",
  toLabel: "Knots",
  factor: 0.5924838013470828
});
