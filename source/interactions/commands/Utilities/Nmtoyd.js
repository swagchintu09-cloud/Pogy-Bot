const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtoyd",
  aliases: ["nmtoyd"],
  title: "Nanometers To Yards",
  description: "Convert nanometers to yards.",
  usage: ["nmtoyd <value>"],
  examples: ["nmtoyd 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Yards",
  factor: 1.093613298337708e-9
});
