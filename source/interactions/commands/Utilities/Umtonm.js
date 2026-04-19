const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtonm",
  aliases: ["umtonm"],
  title: "Micrometers To Nanometers",
  description: "Convert micrometers to nanometers.",
  usage: ["umtonm <value>"],
  examples: ["umtonm 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Nanometers",
  factor: 999.9999999999999
});
