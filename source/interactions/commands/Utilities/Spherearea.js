const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "spherearea",
  aliases: ["spherearea"],
  title: "Sphere Surface Area",
  description: "Sphere Surface Area utility.",
  usage: ["spherearea <value>"],
  examples: ["spherearea 42"],
  group: "math",
  compute: (value) => 4 * Math.PI * value * value
});
