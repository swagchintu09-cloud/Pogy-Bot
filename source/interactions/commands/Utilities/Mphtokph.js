const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mphtokph",
  aliases: ["mphtokph"],
  title: "Miles/Hour To Kilometers/Hour",
  description: "Convert miles/hour to kilometers/hour.",
  usage: ["mphtokph <value>"],
  examples: ["mphtokph 10"],
  group: "conversion",
  fromLabel: "Miles/Hour",
  toLabel: "Kilometers/Hour",
  factor: 1.6093439998712524
});
