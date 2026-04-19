const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtofurlong",
  aliases: ["nmtofurlong"],
  title: "Nanometers To Furlongs",
  description: "Convert nanometers to furlongs.",
  usage: ["nmtofurlong <value>"],
  examples: ["nmtofurlong 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Furlongs",
  factor: 4.970969537898672e-12
});
