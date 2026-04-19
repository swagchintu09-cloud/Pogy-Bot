const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitochain",
  aliases: ["nmitochain"],
  title: "Nautical Miles To Chains",
  description: "Convert nautical miles to chains.",
  usage: ["nmitochain <value>"],
  examples: ["nmitochain 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Chains",
  factor: 92.06235584188339
});
