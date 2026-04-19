const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartoday",
  aliases: ["yeartoday"],
  title: "Years To Days",
  description: "Convert years to days.",
  usage: ["yeartoday <value>"],
  examples: ["yeartoday 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Days",
  factor: 365.25
});
