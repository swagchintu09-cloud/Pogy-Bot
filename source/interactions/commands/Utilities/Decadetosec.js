const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetosec",
  aliases: ["decadetosec"],
  title: "Decades To Seconds",
  description: "Convert decades to seconds.",
  usage: ["decadetosec <value>"],
  examples: ["decadetosec 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Seconds",
  factor: 315576000
});
