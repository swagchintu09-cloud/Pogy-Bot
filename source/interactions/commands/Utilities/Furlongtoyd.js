const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtoyd",
  aliases: ["furlongtoyd"],
  title: "Furlongs To Yards",
  description: "Convert furlongs to yards.",
  usage: ["furlongtoyd <value>"],
  examples: ["furlongtoyd 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Yards",
  factor: 220
});
