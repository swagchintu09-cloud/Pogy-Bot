const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetochain",
  aliases: ["leaguetochain"],
  title: "Leagues To Chains",
  description: "Convert leagues to chains.",
  usage: ["leaguetochain <value>"],
  examples: ["leaguetochain 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Chains",
  factor: 240
});
