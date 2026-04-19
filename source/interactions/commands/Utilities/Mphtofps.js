const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mphtofps",
  aliases: ["mphtofps"],
  title: "Miles/Hour To Feet/Second",
  description: "Convert miles/hour to feet/second.",
  usage: ["mphtofps <value>"],
  examples: ["mphtofps 10"],
  group: "conversion",
  fromLabel: "Miles/Hour",
  toLabel: "Feet/Second",
  factor: 1.4666666666666666
});
