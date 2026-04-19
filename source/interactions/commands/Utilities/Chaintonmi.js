const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintonmi",
  aliases: ["chaintonmi"],
  title: "Chains To Nautical Miles",
  description: "Convert chains to nautical miles.",
  usage: ["chaintonmi <value>"],
  examples: ["chaintonmi 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Nautical Miles",
  factor: 0.0108622030237581
});
