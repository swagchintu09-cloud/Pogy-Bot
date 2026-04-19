const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttoleague",
  aliases: ["fttoleague"],
  title: "Feet To Leagues",
  description: "Convert feet to leagues.",
  usage: ["fttoleague <value>"],
  examples: ["fttoleague 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Leagues",
  factor: 0.00006313131313131313
});
