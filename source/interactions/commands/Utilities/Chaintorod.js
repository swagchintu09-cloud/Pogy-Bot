const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintorod",
  aliases: ["chaintorod"],
  title: "Chains To Rods",
  description: "Convert chains to rods.",
  usage: ["chaintorod <value>"],
  examples: ["chaintorod 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Rods",
  factor: 4
});
