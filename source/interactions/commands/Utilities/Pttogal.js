const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttogal",
  aliases: ["pttogal"],
  title: "Pints To Gallons",
  description: "Convert pints to gallons.",
  usage: ["pttogal <value>"],
  examples: ["pttogal 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Gallons",
  factor: 0.125
});
