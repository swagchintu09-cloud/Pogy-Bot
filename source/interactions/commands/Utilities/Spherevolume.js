const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "spherevolume",
  aliases: ["spherevolume"],
  title: "Sphere Volume",
  description: "Sphere Volume utility.",
  usage: ["spherevolume <value>"],
  examples: ["spherevolume 42"],
  group: "math",
  compute: (value) => (4 / 3) * Math.PI * value * value * value
});
