const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtofurlong",
  aliases: ["mmtofurlong"],
  title: "Millimeters To Furlongs",
  description: "Convert millimeters to furlongs.",
  usage: ["mmtofurlong <value>"],
  examples: ["mmtofurlong 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Furlongs",
  factor: 0.000004970969537898672
});
