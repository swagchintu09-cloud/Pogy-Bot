const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectoday",
  aliases: ["sectoday"],
  title: "Seconds To Days",
  description: "Convert seconds to days.",
  usage: ["sectoday <value>"],
  examples: ["sectoday 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Days",
  factor: 0.000011574074074074073
});
