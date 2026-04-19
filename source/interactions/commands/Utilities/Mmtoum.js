const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtoum",
  aliases: ["mmtoum"],
  title: "Millimeters To Micrometers",
  description: "Convert millimeters to micrometers.",
  usage: ["mmtoum <value>"],
  examples: ["mmtoum 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Micrometers",
  factor: 1000.0000000000001
});
