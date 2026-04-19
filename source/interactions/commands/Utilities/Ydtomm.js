const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtomm",
  aliases: ["ydtomm"],
  title: "Yards To Millimeters",
  description: "Convert yards to millimeters.",
  usage: ["ydtomm <value>"],
  examples: ["ydtomm 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Millimeters",
  factor: 914.4
});
