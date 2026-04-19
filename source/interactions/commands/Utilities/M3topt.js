const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3topt",
  aliases: ["m3topt"],
  title: "Cubic Meters To Pints",
  description: "Convert cubic meters to pints.",
  usage: ["m3topt <value>"],
  examples: ["m3topt 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Pints",
  factor: 2113.3764188651876
});
