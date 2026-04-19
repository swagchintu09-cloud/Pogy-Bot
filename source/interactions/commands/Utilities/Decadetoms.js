const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetoms",
  aliases: ["decadetoms"],
  title: "Decades To Milliseconds",
  description: "Convert decades to milliseconds.",
  usage: ["decadetoms <value>"],
  examples: ["decadetoms 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Milliseconds",
  factor: 315576000000
});
