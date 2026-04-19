const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "hourstoseconds",
  aliases: ["hourstoseconds"],
  title: "Hours To Seconds",
  description: "Hours To Seconds utility.",
  usage: ["hourstoseconds <value>"],
  examples: ["hourstoseconds 42"],
  group: "math",
  compute: (value) => value * 3600
});
