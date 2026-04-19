const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "minutestoseconds",
  aliases: ["minutestoseconds"],
  title: "Minutes To Seconds",
  description: "Minutes To Seconds utility.",
  usage: ["minutestoseconds <value>"],
  examples: ["minutestoseconds 42"],
  group: "math",
  compute: (value) => value * 60
});
