const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytoms",
  aliases: ["daytoms"],
  title: "Days To Milliseconds",
  description: "Convert days to milliseconds.",
  usage: ["daytoms <value>"],
  examples: ["daytoms 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Milliseconds",
  factor: 86400000
});
