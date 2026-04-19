const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mpstomph",
  aliases: ["mpstomph"],
  title: "Meters/Second To Miles/Hour",
  description: "Convert meters/second to miles/hour.",
  usage: ["mpstomph <value>"],
  examples: ["mpstomph 10"],
  group: "conversion",
  fromLabel: "Meters/Second",
  toLabel: "Miles/Hour",
  factor: 2.2369362920544025
});
