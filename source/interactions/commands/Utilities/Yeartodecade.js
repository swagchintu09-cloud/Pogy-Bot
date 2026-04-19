const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartodecade",
  aliases: ["yeartodecade"],
  title: "Years To Decades",
  description: "Convert years to decades.",
  usage: ["yeartodecade <value>"],
  examples: ["yeartodecade 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Decades",
  factor: 0.1
});
