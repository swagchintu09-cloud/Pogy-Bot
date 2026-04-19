const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtoyd",
  aliases: ["rodtoyd"],
  title: "Rods To Yards",
  description: "Convert rods to yards.",
  usage: ["rodtoyd <value>"],
  examples: ["rodtoyd 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Yards",
  factor: 5.5
});
