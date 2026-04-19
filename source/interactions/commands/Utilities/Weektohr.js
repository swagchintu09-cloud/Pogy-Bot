const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektohr",
  aliases: ["weektohr"],
  title: "Weeks To Hours",
  description: "Convert weeks to hours.",
  usage: ["weektohr <value>"],
  examples: ["weektohr 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Hours",
  factor: 168
});
