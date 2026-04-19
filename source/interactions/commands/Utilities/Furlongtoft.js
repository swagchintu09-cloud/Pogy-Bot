const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtoft",
  aliases: ["furlongtoft"],
  title: "Furlongs To Feet",
  description: "Convert furlongs to feet.",
  usage: ["furlongtoft <value>"],
  examples: ["furlongtoft 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Feet",
  factor: 660
});
