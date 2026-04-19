const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtocarat",
  aliases: ["lbtocarat"],
  title: "Pounds To Carats",
  description: "Convert pounds to carats.",
  usage: ["lbtocarat <value>"],
  examples: ["lbtocarat 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Carats",
  factor: 2267.96185
});
