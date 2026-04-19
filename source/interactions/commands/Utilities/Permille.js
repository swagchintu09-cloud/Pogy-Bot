const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "permille",
  aliases: ["permille"],
  title: "Per Mille",
  description: "Per Mille utility.",
  usage: ["permille <value>"],
  examples: ["permille 42"],
  group: "math",
  compute: (value) => value * 1000
});
