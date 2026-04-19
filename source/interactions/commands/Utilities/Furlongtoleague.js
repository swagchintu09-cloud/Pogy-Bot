const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtoleague",
  aliases: ["furlongtoleague"],
  title: "Furlongs To Leagues",
  description: "Convert furlongs to leagues.",
  usage: ["furlongtoleague <value>"],
  examples: ["furlongtoleague 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Leagues",
  factor: 0.041666666666666664
});
