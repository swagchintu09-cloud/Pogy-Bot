const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttonm",
  aliases: ["fttonm"],
  title: "Feet To Nanometers",
  description: "Convert feet to nanometers.",
  usage: ["fttonm <value>"],
  examples: ["fttonm 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Nanometers",
  factor: 304800000
});
