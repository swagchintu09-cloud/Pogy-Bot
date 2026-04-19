const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetofurlong",
  aliases: ["leaguetofurlong"],
  title: "Leagues To Furlongs",
  description: "Convert leagues to furlongs.",
  usage: ["leaguetofurlong <value>"],
  examples: ["leaguetofurlong 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Furlongs",
  factor: 24
});
