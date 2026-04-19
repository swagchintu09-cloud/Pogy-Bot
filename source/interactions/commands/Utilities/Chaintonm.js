const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintonm",
  aliases: ["chaintonm"],
  title: "Chains To Nanometers",
  description: "Convert chains to nanometers.",
  usage: ["chaintonm <value>"],
  examples: ["chaintonm 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Nanometers",
  factor: 20116800000
});
