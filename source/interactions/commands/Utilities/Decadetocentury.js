const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetocentury",
  aliases: ["decadetocentury"],
  title: "Decades To Centuries",
  description: "Convert decades to centuries.",
  usage: ["decadetocentury <value>"],
  examples: ["decadetocentury 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Centuries",
  factor: 0.1
});
