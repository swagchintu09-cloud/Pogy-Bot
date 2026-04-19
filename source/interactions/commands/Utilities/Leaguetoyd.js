const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetoyd",
  aliases: ["leaguetoyd"],
  title: "Leagues To Yards",
  description: "Convert leagues to yards.",
  usage: ["leaguetoyd <value>"],
  examples: ["leaguetoyd 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Yards",
  factor: 5280
});
