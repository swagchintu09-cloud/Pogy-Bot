const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytodecade",
  aliases: ["centurytodecade"],
  title: "Centuries To Decades",
  description: "Convert centuries to decades.",
  usage: ["centurytodecade <value>"],
  examples: ["centurytodecade 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Decades",
  factor: 10
});
