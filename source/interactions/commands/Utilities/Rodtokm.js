const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtokm",
  aliases: ["rodtokm"],
  title: "Rods To Kilometers",
  description: "Convert rods to kilometers.",
  usage: ["rodtokm <value>"],
  examples: ["rodtokm 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Kilometers",
  factor: 0.0050292
});
