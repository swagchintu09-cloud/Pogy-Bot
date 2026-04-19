const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartomin",
  aliases: ["yeartomin"],
  title: "Years To Minutes",
  description: "Convert years to minutes.",
  usage: ["yeartomin <value>"],
  examples: ["yeartomin 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Minutes",
  factor: 525960
});
