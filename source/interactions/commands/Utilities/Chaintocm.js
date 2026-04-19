const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "chaintocm",
  aliases: ["chaintocm"],
  title: "Chains To Centimeters",
  description: "Convert chains to centimeters.",
  usage: ["chaintocm <value>"],
  examples: ["chaintocm 10"],
  group: "conversion",
  fromLabel: "Chains",
  toLabel: "Centimeters",
  factor: 2011.68
});
