const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtochain",
  aliases: ["nmtochain"],
  title: "Nanometers To Chains",
  description: "Convert nanometers to chains.",
  usage: ["nmtochain <value>"],
  examples: ["nmtochain 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Chains",
  factor: 4.970969537898672e-11
});
