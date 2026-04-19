const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtochain",
  aliases: ["kmtochain"],
  title: "Kilometers To Chains",
  description: "Convert kilometers to chains.",
  usage: ["kmtochain <value>"],
  examples: ["kmtochain 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Chains",
  factor: 49.709695378986716
});
