const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "roundnum",
  aliases: ["roundnum"],
  title: "Round Number",
  description: "Round Number utility.",
  usage: ["roundnum <value>"],
  examples: ["roundnum 42"],
  group: "math",
  compute: (value) => Math.round(value)
});
