const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectoms",
  aliases: ["sectoms"],
  title: "Seconds To Milliseconds",
  description: "Convert seconds to milliseconds.",
  usage: ["sectoms <value>"],
  examples: ["sectoms 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Milliseconds",
  factor: 1000
});
