const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintofurlong",
  aliases: ["chaintofurlong"],
  title: "Chains To Furlongs",
  description: "Convert chains to furlongs.",
  usage: ["chaintofurlong <value>"],
  examples: ["chaintofurlong 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Furlongs",
  factor: 0.1
});
