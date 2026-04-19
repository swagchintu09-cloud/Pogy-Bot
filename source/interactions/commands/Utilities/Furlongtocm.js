const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtocm",
  aliases: ["furlongtocm"],
  title: "Furlongs To Centimeters",
  description: "Convert furlongs to centimeters.",
  usage: ["furlongtocm <value>"],
  examples: ["furlongtocm 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Centimeters",
  factor: 20116.8
});
