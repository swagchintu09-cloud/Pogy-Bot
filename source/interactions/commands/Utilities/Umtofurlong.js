const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtofurlong",
  aliases: ["umtofurlong"],
  title: "Micrometers To Furlongs",
  description: "Convert micrometers to furlongs.",
  usage: ["umtofurlong <value>"],
  examples: ["umtofurlong 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Furlongs",
  factor: 4.970969537898672e-9
});
