const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fpstomph",
  aliases: ["fpstomph"],
  title: "Feet/Second To Miles/Hour",
  description: "Convert feet/second to miles/hour.",
  usage: ["fpstomph <value>"],
  examples: ["fpstomph 10"],
  group: "conversion",
  fromLabel: "Feet/Second",
  toLabel: "Miles/Hour",
  factor: 0.6818181818181819
});
