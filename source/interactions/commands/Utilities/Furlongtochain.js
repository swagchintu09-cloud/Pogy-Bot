const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "furlongtochain",
  aliases: ["furlongtochain"],
  title: "Furlongs To Chains",
  description: "Convert furlongs to chains.",
  usage: ["furlongtochain <value>"],
  examples: ["furlongtochain 10"],
  group: "conversion",
  fromLabel: "Furlongs",
  toLabel: "Chains",
  factor: 10
});
