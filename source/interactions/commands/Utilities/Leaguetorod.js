const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetorod",
  aliases: ["leaguetorod"],
  title: "Leagues To Rods",
  description: "Convert leagues to rods.",
  usage: ["leaguetorod <value>"],
  examples: ["leaguetorod 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Rods",
  factor: 960
});
