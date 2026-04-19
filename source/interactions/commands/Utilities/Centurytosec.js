const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytosec",
  aliases: ["centurytosec"],
  title: "Centuries To Seconds",
  description: "Convert centuries to seconds.",
  usage: ["centurytosec <value>"],
  examples: ["centurytosec 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Seconds",
  factor: 3155760000
});
