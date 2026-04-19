const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytohr",
  aliases: ["daytohr"],
  title: "Days To Hours",
  description: "Convert days to hours.",
  usage: ["daytohr <value>"],
  examples: ["daytohr 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Hours",
  factor: 24
});
