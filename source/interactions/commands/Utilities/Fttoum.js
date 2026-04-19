const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttoum",
  aliases: ["fttoum"],
  title: "Feet To Micrometers",
  description: "Convert feet to micrometers.",
  usage: ["fttoum <value>"],
  examples: ["fttoum 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Micrometers",
  factor: 304800.00000000006
});
