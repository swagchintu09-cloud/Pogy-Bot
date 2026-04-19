const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitorod",
  aliases: ["nmitorod"],
  title: "Nautical Miles To Rods",
  description: "Convert nautical miles to rods.",
  usage: ["nmitorod <value>"],
  examples: ["nmitorod 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Rods",
  factor: 368.24942336753355
});
