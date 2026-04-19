const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtochain",
  aliases: ["mtochain"],
  title: "Meters To Chains",
  description: "Convert meters to chains.",
  usage: ["mtochain <value>"],
  examples: ["mtochain 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Chains",
  factor: 0.049709695378986715
});
