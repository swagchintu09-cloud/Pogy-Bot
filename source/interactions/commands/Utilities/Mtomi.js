const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtomi",
  aliases: ["mtomi"],
  title: "Meters To Miles",
  description: "Convert meters to miles.",
  usage: ["mtomi <value>"],
  examples: ["mtomi 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Miles",
  factor: 0.0006213711922373339
});
