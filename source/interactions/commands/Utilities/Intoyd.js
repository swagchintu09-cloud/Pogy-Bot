const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intoyd",
  aliases: ["intoyd"],
  title: "Inches To Yards",
  description: "Convert inches to yards.",
  usage: ["intoyd <value>"],
  examples: ["intoyd 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Yards",
  factor: 0.027777777777777776
});
