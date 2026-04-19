const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitoleague",
  aliases: ["mitoleague"],
  title: "Miles To Leagues",
  description: "Convert miles to leagues.",
  usage: ["mitoleague <value>"],
  examples: ["mitoleague 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Leagues",
  factor: 0.3333333333333333
});
