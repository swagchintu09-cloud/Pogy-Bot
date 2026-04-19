const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartocentury",
  aliases: ["yeartocentury"],
  title: "Years To Centuries",
  description: "Convert years to centuries.",
  usage: ["yeartocentury <value>"],
  examples: ["yeartocentury 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Centuries",
  factor: 0.01
});
