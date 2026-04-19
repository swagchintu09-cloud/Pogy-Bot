const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytoyear",
  aliases: ["daytoyear"],
  title: "Days To Years",
  description: "Convert days to years.",
  usage: ["daytoyear <value>"],
  examples: ["daytoyear 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Years",
  factor: 0.0027378507871321013
});
