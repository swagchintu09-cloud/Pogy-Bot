const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytohr",
  aliases: ["centurytohr"],
  title: "Centuries To Hours",
  description: "Convert centuries to hours.",
  usage: ["centurytohr <value>"],
  examples: ["centurytohr 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Hours",
  factor: 876600
});
