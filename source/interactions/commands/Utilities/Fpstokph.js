const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fpstokph",
  aliases: ["fpstokph"],
  title: "Feet/Second To Kilometers/Hour",
  description: "Convert feet/second to kilometers/hour.",
  usage: ["fpstokph <value>"],
  examples: ["fpstokph 10"],
  group: "conversion",
  fromLabel: "Feet/Second",
  toLabel: "Kilometers/Hour",
  factor: 1.0972799999122176
});
