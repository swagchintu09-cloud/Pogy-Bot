const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtosec",
  aliases: ["monthtosec"],
  title: "Months To Seconds",
  description: "Convert months to seconds.",
  usage: ["monthtosec <value>"],
  examples: ["monthtosec 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Seconds",
  factor: 2629800
});
