const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtoyd",
  aliases: ["mmtoyd"],
  title: "Millimeters To Yards",
  description: "Convert millimeters to yards.",
  usage: ["mmtoyd <value>"],
  examples: ["mmtoyd 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Yards",
  factor: 0.0010936132983377078
});
