const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytodecade",
  aliases: ["daytodecade"],
  title: "Days To Decades",
  description: "Convert days to decades.",
  usage: ["daytodecade <value>"],
  examples: ["daytodecade 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Decades",
  factor: 0.0002737850787132101
});
