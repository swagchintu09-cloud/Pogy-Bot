const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "leftoverright",
  aliases: ["leftoverright"],
  title: "Left Over Right",
  description: "Left Over Right utility.",
  usage: ["leftoverright <left> <right>"],
  examples: ["leftoverright 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : Math.floor(left / right)
});
