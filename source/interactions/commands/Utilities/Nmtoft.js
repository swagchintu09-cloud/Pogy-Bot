const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtoft",
  aliases: ["nmtoft"],
  title: "Nanometers To Feet",
  description: "Convert nanometers to feet.",
  usage: ["nmtoft <value>"],
  examples: ["nmtoft 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Feet",
  factor: 3.2808398950131233e-9
});
