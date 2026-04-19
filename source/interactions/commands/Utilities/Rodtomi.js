const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtomi",
  aliases: ["rodtomi"],
  title: "Rods To Miles",
  description: "Convert rods to miles.",
  usage: ["rodtomi <value>"],
  examples: ["rodtomi 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Miles",
  factor: 0.003125
});
