const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtoleague",
  aliases: ["kmtoleague"],
  title: "Kilometers To Leagues",
  description: "Convert kilometers to leagues.",
  usage: ["kmtoleague <value>"],
  examples: ["kmtoleague 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Leagues",
  factor: 0.20712373074577797
});
