const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtomm",
  aliases: ["furlongtomm"],
  title: "Furlongs To Millimeters",
  description: "Convert furlongs to millimeters.",
  usage: ["furlongtomm <value>"],
  examples: ["furlongtomm 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Millimeters",
  factor: 201168
});
