const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtoyear",
  aliases: ["monthtoyear"],
  title: "Months To Years",
  description: "Convert months to years.",
  usage: ["monthtoyear <value>"],
  examples: ["monthtoyear 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Years",
  factor: 0.08333333333333333
});
