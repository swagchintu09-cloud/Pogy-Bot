const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtochain",
  aliases: ["rodtochain"],
  title: "Rods To Chains",
  description: "Convert rods to chains.",
  usage: ["rodtochain <value>"],
  examples: ["rodtochain 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Chains",
  factor: 0.25
});
