const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitochain",
  aliases: ["mitochain"],
  title: "Miles To Chains",
  description: "Convert miles to chains.",
  usage: ["mitochain <value>"],
  examples: ["mitochain 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Chains",
  factor: 80
});
