const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtochain",
  aliases: ["ydtochain"],
  title: "Yards To Chains",
  description: "Convert yards to chains.",
  usage: ["ydtochain <value>"],
  examples: ["ydtochain 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Chains",
  factor: 0.04545454545454545
});
