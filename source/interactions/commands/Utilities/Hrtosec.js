const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtosec",
  aliases: ["hrtosec"],
  title: "Hours To Seconds",
  description: "Convert hours to seconds.",
  usage: ["hrtosec <value>"],
  examples: ["hrtosec 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Seconds",
  factor: 3600
});
