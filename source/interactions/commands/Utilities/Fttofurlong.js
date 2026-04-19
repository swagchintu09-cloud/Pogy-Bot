const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttofurlong",
  aliases: ["fttofurlong"],
  title: "Feet To Furlongs",
  description: "Convert feet to furlongs.",
  usage: ["fttofurlong <value>"],
  examples: ["fttofurlong 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Furlongs",
  factor: 0.0015151515151515152
});
