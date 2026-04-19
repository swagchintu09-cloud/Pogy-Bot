const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtomm",
  aliases: ["rodtomm"],
  title: "Rods To Millimeters",
  description: "Convert rods to millimeters.",
  usage: ["rodtomm <value>"],
  examples: ["rodtomm 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Millimeters",
  factor: 5029.2
});
