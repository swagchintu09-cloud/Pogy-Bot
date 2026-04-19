const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectocentury",
  aliases: ["sectocentury"],
  title: "Seconds To Centuries",
  description: "Convert seconds to centuries.",
  usage: ["sectocentury <value>"],
  examples: ["sectocentury 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Centuries",
  factor: 3.168808781402895e-10
});
