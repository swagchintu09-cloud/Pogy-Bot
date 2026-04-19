const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtoleague",
  aliases: ["umtoleague"],
  title: "Micrometers To Leagues",
  description: "Convert micrometers to leagues.",
  usage: ["umtoleague <value>"],
  examples: ["umtoleague 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Leagues",
  factor: 2.0712373074577797e-10
});
