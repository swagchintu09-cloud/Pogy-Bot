const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstodecade",
  aliases: ["mstodecade"],
  title: "Milliseconds To Decades",
  description: "Convert milliseconds to decades.",
  usage: ["mstodecade <value>"],
  examples: ["mstodecade 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Decades",
  factor: 3.168808781402895e-12
});
