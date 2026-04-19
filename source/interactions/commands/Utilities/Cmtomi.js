const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtomi",
  aliases: ["cmtomi"],
  title: "Centimeters To Miles",
  description: "Convert centimeters to miles.",
  usage: ["cmtomi <value>"],
  examples: ["cmtomi 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Miles",
  factor: 0.000006213711922373339
});
