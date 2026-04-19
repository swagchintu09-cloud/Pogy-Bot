const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektoms",
  aliases: ["weektoms"],
  title: "Weeks To Milliseconds",
  description: "Convert weeks to milliseconds.",
  usage: ["weektoms <value>"],
  examples: ["weektoms 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Milliseconds",
  factor: 604800000
});
