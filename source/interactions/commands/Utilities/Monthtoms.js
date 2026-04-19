const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtoms",
  aliases: ["monthtoms"],
  title: "Months To Milliseconds",
  description: "Convert months to milliseconds.",
  usage: ["monthtoms <value>"],
  examples: ["monthtoms 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Milliseconds",
  factor: 2629800000
});
