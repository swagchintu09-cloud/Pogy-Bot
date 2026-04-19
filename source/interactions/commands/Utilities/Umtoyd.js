const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtoyd",
  aliases: ["umtoyd"],
  title: "Micrometers To Yards",
  description: "Convert micrometers to yards.",
  usage: ["umtoyd <value>"],
  examples: ["umtoyd 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Yards",
  factor: 0.0000010936132983377078
});
