const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "daystohours",
  aliases: ["daystohours"],
  title: "Days To Hours",
  description: "Days To Hours utility.",
  usage: ["daystohours <value>"],
  examples: ["daystohours 42"],
  group: "math",
  compute: (value) => value * 24
});
