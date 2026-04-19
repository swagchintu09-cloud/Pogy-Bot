const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitoyd",
  aliases: ["mitoyd"],
  title: "Miles To Yards",
  description: "Convert miles to yards.",
  usage: ["mitoyd <value>"],
  examples: ["mitoyd 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Yards",
  factor: 1760
});
