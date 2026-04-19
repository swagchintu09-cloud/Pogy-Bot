const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtoyd",
  aliases: ["cmtoyd"],
  title: "Centimeters To Yards",
  description: "Convert centimeters to yards.",
  usage: ["cmtoyd <value>"],
  examples: ["cmtoyd 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Yards",
  factor: 0.010936132983377079
});
