const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtocentury",
  aliases: ["monthtocentury"],
  title: "Months To Centuries",
  description: "Convert months to centuries.",
  usage: ["monthtocentury <value>"],
  examples: ["monthtocentury 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Centuries",
  factor: 0.0008333333333333334
});
