const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytoday",
  aliases: ["centurytoday"],
  title: "Centuries To Days",
  description: "Convert centuries to days.",
  usage: ["centurytoday <value>"],
  examples: ["centurytoday 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Days",
  factor: 36525
});
