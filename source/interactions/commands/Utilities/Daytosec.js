const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytosec",
  aliases: ["daytosec"],
  title: "Days To Seconds",
  description: "Convert days to seconds.",
  usage: ["daytosec <value>"],
  examples: ["daytosec 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Seconds",
  factor: 86400
});
