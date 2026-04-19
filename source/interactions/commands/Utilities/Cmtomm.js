const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtomm",
  aliases: ["cmtomm"],
  title: "Centimeters To Millimeters",
  description: "Convert centimeters to millimeters.",
  usage: ["cmtomm <value>"],
  examples: ["cmtomm 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Millimeters",
  factor: 10
});
