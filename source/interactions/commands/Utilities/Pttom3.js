const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttom3",
  aliases: ["pttom3"],
  title: "Pints To Cubic Meters",
  description: "Convert pints to cubic meters.",
  usage: ["pttom3 <value>"],
  examples: ["pttom3 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Cubic Meters",
  factor: 0.00047317647299999996
});
