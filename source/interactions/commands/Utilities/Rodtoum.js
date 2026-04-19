const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtoum",
  aliases: ["rodtoum"],
  title: "Rods To Micrometers",
  description: "Convert rods to micrometers.",
  usage: ["rodtoum <value>"],
  examples: ["rodtoum 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Micrometers",
  factor: 5029200.000000001
});
