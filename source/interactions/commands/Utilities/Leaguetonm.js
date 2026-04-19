const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetonm",
  aliases: ["leaguetonm"],
  title: "Leagues To Nanometers",
  description: "Convert leagues to nanometers.",
  usage: ["leaguetonm <value>"],
  examples: ["leaguetonm 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Nanometers",
  factor: 4828032000000
});
