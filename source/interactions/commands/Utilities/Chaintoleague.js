const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintoleague",
  aliases: ["chaintoleague"],
  title: "Chains To Leagues",
  description: "Convert chains to leagues.",
  usage: ["chaintoleague <value>"],
  examples: ["chaintoleague 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Leagues",
  factor: 0.004166666666666667
});
