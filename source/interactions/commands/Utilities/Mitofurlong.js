const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitofurlong",
  aliases: ["mitofurlong"],
  title: "Miles To Furlongs",
  description: "Convert miles to furlongs.",
  usage: ["mitofurlong <value>"],
  examples: ["mitofurlong 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Furlongs",
  factor: 8
});
