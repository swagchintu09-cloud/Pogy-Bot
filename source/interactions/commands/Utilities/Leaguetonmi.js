const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetonmi",
  aliases: ["leaguetonmi"],
  title: "Leagues To Nautical Miles",
  description: "Convert leagues to nautical miles.",
  usage: ["leaguetonmi <value>"],
  examples: ["leaguetonmi 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Nautical Miles",
  factor: 2.606928725701944
});
