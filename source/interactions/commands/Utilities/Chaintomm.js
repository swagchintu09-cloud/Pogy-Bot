const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintomm",
  aliases: ["chaintomm"],
  title: "Chains To Millimeters",
  description: "Convert chains to millimeters.",
  usage: ["chaintomm <value>"],
  examples: ["chaintomm 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Millimeters",
  factor: 20116.8
});
