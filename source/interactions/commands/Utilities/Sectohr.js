const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectohr",
  aliases: ["sectohr"],
  title: "Seconds To Hours",
  description: "Convert seconds to hours.",
  usage: ["sectohr <value>"],
  examples: ["sectohr 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Hours",
  factor: 0.0002777777777777778
});
