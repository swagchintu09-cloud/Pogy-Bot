const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttochain",
  aliases: ["fttochain"],
  title: "Feet To Chains",
  description: "Convert feet to chains.",
  usage: ["fttochain <value>"],
  examples: ["fttochain 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Chains",
  factor: 0.015151515151515152
});
