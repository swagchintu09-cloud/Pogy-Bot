const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtodecade",
  aliases: ["monthtodecade"],
  title: "Months To Decades",
  description: "Convert months to decades.",
  usage: ["monthtodecade <value>"],
  examples: ["monthtodecade 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Decades",
  factor: 0.008333333333333333
});
