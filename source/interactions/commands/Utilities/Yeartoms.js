const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartoms",
  aliases: ["yeartoms"],
  title: "Years To Milliseconds",
  description: "Convert years to milliseconds.",
  usage: ["yeartoms <value>"],
  examples: ["yeartoms 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Milliseconds",
  factor: 31557600000
});
