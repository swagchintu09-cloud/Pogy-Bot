const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "floornum",
  aliases: ["floornum"],
  title: "Floor",
  description: "Floor utility.",
  usage: ["floornum <value>"],
  examples: ["floornum 42"],
  group: "math",
  compute: (value) => Math.floor(value)
});
