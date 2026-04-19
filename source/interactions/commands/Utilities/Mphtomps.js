const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mphtomps",
  aliases: ["mphtomps"],
  title: "Miles/Hour To Meters/Second",
  description: "Convert miles/hour to meters/second.",
  usage: ["mphtomps <value>"],
  examples: ["mphtomps 10"],
  group: "conversion",
  fromLabel: "Miles/Hour",
  toLabel: "Meters/Second",
  factor: 0.44704
});
