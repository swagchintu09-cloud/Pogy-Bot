const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtochain",
  aliases: ["umtochain"],
  title: "Micrometers To Chains",
  description: "Convert micrometers to chains.",
  usage: ["umtochain <value>"],
  examples: ["umtochain 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Chains",
  factor: 4.970969537898671e-8
});
