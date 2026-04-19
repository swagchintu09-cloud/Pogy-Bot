const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartosec",
  aliases: ["yeartosec"],
  title: "Years To Seconds",
  description: "Convert years to seconds.",
  usage: ["yeartosec <value>"],
  examples: ["yeartosec 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Seconds",
  factor: 31557600
});
