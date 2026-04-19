const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtokm",
  aliases: ["nmtokm"],
  title: "Nanometers To Kilometers",
  description: "Convert nanometers to kilometers.",
  usage: ["nmtokm <value>"],
  examples: ["nmtokm 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Kilometers",
  factor: 1e-12
});
