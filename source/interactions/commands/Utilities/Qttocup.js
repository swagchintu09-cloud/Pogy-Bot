const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttocup",
  aliases: ["qttocup"],
  title: "Quarts To Cups",
  description: "Convert quarts to cups.",
  usage: ["qttocup <value>"],
  examples: ["qttocup 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Cups",
  factor: 4
});
