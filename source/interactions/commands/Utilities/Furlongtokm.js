const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtokm",
  aliases: ["furlongtokm"],
  title: "Furlongs To Kilometers",
  description: "Convert furlongs to kilometers.",
  usage: ["furlongtokm <value>"],
  examples: ["furlongtokm 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Kilometers",
  factor: 0.201168
});
