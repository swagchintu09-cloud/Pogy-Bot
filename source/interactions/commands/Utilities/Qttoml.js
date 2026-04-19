const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttoml",
  aliases: ["qttoml"],
  title: "Quarts To Milliliters",
  description: "Convert quarts to milliliters.",
  usage: ["qttoml <value>"],
  examples: ["qttoml 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Milliliters",
  factor: 946.352946
});
