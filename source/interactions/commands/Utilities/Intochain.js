const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intochain",
  aliases: ["intochain"],
  title: "Inches To Chains",
  description: "Convert inches to chains.",
  usage: ["intochain <value>"],
  examples: ["intochain 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Chains",
  factor: 0.0012626262626262625
});
