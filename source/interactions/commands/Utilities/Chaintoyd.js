const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintoyd",
  aliases: ["chaintoyd"],
  title: "Chains To Yards",
  description: "Convert chains to yards.",
  usage: ["chaintoyd <value>"],
  examples: ["chaintoyd 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Yards",
  factor: 22
});
