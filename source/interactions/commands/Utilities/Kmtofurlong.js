const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtofurlong",
  aliases: ["kmtofurlong"],
  title: "Kilometers To Furlongs",
  description: "Convert kilometers to furlongs.",
  usage: ["kmtofurlong <value>"],
  examples: ["kmtofurlong 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Furlongs",
  factor: 4.970969537898672
});
