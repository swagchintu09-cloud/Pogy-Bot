const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytoms",
  aliases: ["centurytoms"],
  title: "Centuries To Milliseconds",
  description: "Convert centuries to milliseconds.",
  usage: ["centurytoms <value>"],
  examples: ["centurytoms 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Milliseconds",
  factor: 3155760000000
});
