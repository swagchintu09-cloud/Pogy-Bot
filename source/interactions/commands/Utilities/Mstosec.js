const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstosec",
  aliases: ["mstosec"],
  title: "Milliseconds To Seconds",
  description: "Convert milliseconds to seconds.",
  usage: ["mstosec <value>"],
  examples: ["mstosec 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Seconds",
  factor: 0.001
});
