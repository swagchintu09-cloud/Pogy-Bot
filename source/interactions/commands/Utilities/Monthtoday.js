const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtoday",
  aliases: ["monthtoday"],
  title: "Months To Days",
  description: "Convert months to days.",
  usage: ["monthtoday <value>"],
  examples: ["monthtoday 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Days",
  factor: 30.4375
});
