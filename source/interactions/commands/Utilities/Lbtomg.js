const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtomg",
  aliases: ["lbtomg"],
  title: "Pounds To Milligrams",
  description: "Convert pounds to milligrams.",
  usage: ["lbtomg <value>"],
  examples: ["lbtomg 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Milligrams",
  factor: 453592.37000000005
});
