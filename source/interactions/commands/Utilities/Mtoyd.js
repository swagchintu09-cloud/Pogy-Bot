const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtoyd",
  aliases: ["mtoyd"],
  title: "Meters To Yards",
  description: "Convert meters to yards.",
  usage: ["mtoyd <value>"],
  examples: ["mtoyd 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Yards",
  factor: 1.0936132983377078
});
