const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytomin",
  aliases: ["centurytomin"],
  title: "Centuries To Minutes",
  description: "Convert centuries to minutes.",
  usage: ["centurytomin <value>"],
  examples: ["centurytomin 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Minutes",
  factor: 52596000
});
