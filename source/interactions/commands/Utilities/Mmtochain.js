const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtochain",
  aliases: ["mmtochain"],
  title: "Millimeters To Chains",
  description: "Convert millimeters to chains.",
  usage: ["mmtochain <value>"],
  examples: ["mmtochain 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Chains",
  factor: 0.000049709695378986714
});
