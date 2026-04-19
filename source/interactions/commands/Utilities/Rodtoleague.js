const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtoleague",
  aliases: ["rodtoleague"],
  title: "Rods To Leagues",
  description: "Convert rods to leagues.",
  usage: ["rodtoleague <value>"],
  examples: ["rodtoleague 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Leagues",
  factor: 0.0010416666666666667
});
