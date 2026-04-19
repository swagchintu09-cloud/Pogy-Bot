const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectodecade",
  aliases: ["sectodecade"],
  title: "Seconds To Decades",
  description: "Convert seconds to decades.",
  usage: ["sectodecade <value>"],
  examples: ["sectodecade 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Decades",
  factor: 3.168808781402895e-9
});
