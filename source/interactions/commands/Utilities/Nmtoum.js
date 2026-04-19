const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtoum",
  aliases: ["nmtoum"],
  title: "Nanometers To Micrometers",
  description: "Convert nanometers to micrometers.",
  usage: ["nmtoum <value>"],
  examples: ["nmtoum 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Micrometers",
  factor: 0.001
});
