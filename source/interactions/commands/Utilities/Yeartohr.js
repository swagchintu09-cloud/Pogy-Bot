const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartohr",
  aliases: ["yeartohr"],
  title: "Years To Hours",
  description: "Convert years to hours.",
  usage: ["yeartohr <value>"],
  examples: ["yeartohr 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Hours",
  factor: 8766
});
