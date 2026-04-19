const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtochain",
  aliases: ["cmtochain"],
  title: "Centimeters To Chains",
  description: "Convert centimeters to chains.",
  usage: ["cmtochain <value>"],
  examples: ["cmtochain 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Chains",
  factor: 0.0004970969537898671
});
