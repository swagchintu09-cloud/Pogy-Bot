const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "fahrenheitguessfrombody",
  aliases: ["fahrenheitguessfrombody"],
  title: "Body Temp Delta From 98.6F",
  description: "Body Temp Delta From 98.6F utility.",
  usage: ["fahrenheitguessfrombody <value>"],
  examples: ["fahrenheitguessfrombody 42"],
  group: "math",
  compute: (value) => value - 98.6
});
