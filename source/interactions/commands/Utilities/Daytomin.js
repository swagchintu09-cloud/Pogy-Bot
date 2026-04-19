const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytomin",
  aliases: ["daytomin"],
  title: "Days To Minutes",
  description: "Convert days to minutes.",
  usage: ["daytomin <value>"],
  examples: ["daytomin 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Minutes",
  factor: 1440
});
