const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtom",
  aliases: ["furlongtom"],
  title: "Furlongs To Meters",
  description: "Convert furlongs to meters.",
  usage: ["furlongtom <value>"],
  examples: ["furlongtom 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Meters",
  factor: 201.168
});
