const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "celsiusguessfrombody",
  aliases: ["celsiusguessfrombody"],
  title: "Body Temp Delta From 37C",
  description: "Body Temp Delta From 37C utility.",
  usage: ["celsiusguessfrombody <value>"],
  examples: ["celsiusguessfrombody 42"],
  group: "math",
  compute: (value) => value - 37
});
