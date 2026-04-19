const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytocentury",
  aliases: ["daytocentury"],
  title: "Days To Centuries",
  description: "Convert days to centuries.",
  usage: ["daytocentury <value>"],
  examples: ["daytocentury 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Centuries",
  factor: 0.000027378507871321012
});
