const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtonm",
  aliases: ["rodtonm"],
  title: "Rods To Nanometers",
  description: "Convert rods to nanometers.",
  usage: ["rodtonm <value>"],
  examples: ["rodtonm 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Nanometers",
  factor: 5029200000
});
