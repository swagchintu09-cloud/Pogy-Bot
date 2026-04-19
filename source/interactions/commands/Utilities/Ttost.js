const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttost",
  aliases: ["ttost"],
  title: "Metric Tons To Stone",
  description: "Convert metric tons to stone.",
  usage: ["ttost <value>"],
  examples: ["ttost 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Stone",
  factor: 157.4730444177697
});
