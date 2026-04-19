const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtoum",
  aliases: ["kmtoum"],
  title: "Kilometers To Micrometers",
  description: "Convert kilometers to micrometers.",
  usage: ["kmtoum <value>"],
  examples: ["kmtoum 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Micrometers",
  factor: 1000000000
});
