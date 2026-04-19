const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtoyd",
  aliases: ["kmtoyd"],
  title: "Kilometers To Yards",
  description: "Convert kilometers to yards.",
  usage: ["kmtoyd <value>"],
  examples: ["kmtoyd 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Yards",
  factor: 1093.6132983377079
});
