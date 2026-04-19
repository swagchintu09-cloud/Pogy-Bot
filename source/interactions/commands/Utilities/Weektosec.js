const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektosec",
  aliases: ["weektosec"],
  title: "Weeks To Seconds",
  description: "Convert weeks to seconds.",
  usage: ["weektosec <value>"],
  examples: ["weektosec 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Seconds",
  factor: 604800
});
