const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintoum",
  aliases: ["chaintoum"],
  title: "Chains To Micrometers",
  description: "Convert chains to micrometers.",
  usage: ["chaintoum <value>"],
  examples: ["chaintoum 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Micrometers",
  factor: 20116800.000000004
});
