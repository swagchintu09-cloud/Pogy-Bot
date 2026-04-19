const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtoum",
  aliases: ["cmtoum"],
  title: "Centimeters To Micrometers",
  description: "Convert centimeters to micrometers.",
  usage: ["cmtoum <value>"],
  examples: ["cmtoum 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Micrometers",
  factor: 10000
});
