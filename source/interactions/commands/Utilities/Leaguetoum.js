const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetoum",
  aliases: ["leaguetoum"],
  title: "Leagues To Micrometers",
  description: "Convert leagues to micrometers.",
  usage: ["leaguetoum <value>"],
  examples: ["leaguetoum 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Micrometers",
  factor: 4828032000
});
