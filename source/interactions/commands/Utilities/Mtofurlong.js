const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtofurlong",
  aliases: ["mtofurlong"],
  title: "Meters To Furlongs",
  description: "Convert meters to furlongs.",
  usage: ["mtofurlong <value>"],
  examples: ["mtofurlong 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Furlongs",
  factor: 0.004970969537898671
});
