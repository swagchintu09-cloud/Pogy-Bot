const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtoum",
  aliases: ["furlongtoum"],
  title: "Furlongs To Micrometers",
  description: "Convert furlongs to micrometers.",
  usage: ["furlongtoum <value>"],
  examples: ["furlongtoum 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Micrometers",
  factor: 201168000.00000003
});
