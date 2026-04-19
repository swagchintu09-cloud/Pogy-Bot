const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtokm",
  aliases: ["mtokm"],
  title: "Meters To Kilometers",
  description: "Convert meters to kilometers.",
  usage: ["mtokm <value>"],
  examples: ["mtokm 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Kilometers",
  factor: 0.001
});
