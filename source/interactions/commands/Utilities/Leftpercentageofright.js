const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "leftpercentageofright",
  aliases: ["leftpercentageofright"],
  title: "Left As Percent Of Right",
  description: "Left As Percent Of Right utility.",
  usage: ["leftpercentageofright <left> <right>"],
  examples: ["leftpercentageofright 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : (left / right) * 100
});
