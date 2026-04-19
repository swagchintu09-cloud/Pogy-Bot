const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttograin",
  aliases: ["sttograin"],
  title: "Stone To Grains",
  description: "Convert stone to grains.",
  usage: ["sttograin <value>"],
  examples: ["sttograin 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Grains",
  factor: 98000.00000000001
});
