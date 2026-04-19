const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtokm",
  aliases: ["cmtokm"],
  title: "Centimeters To Kilometers",
  description: "Convert centimeters to kilometers.",
  usage: ["cmtokm <value>"],
  examples: ["cmtokm 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Kilometers",
  factor: 0.00001
});
