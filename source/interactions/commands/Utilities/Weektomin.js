const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektomin",
  aliases: ["weektomin"],
  title: "Weeks To Minutes",
  description: "Convert weeks to minutes.",
  usage: ["weektomin <value>"],
  examples: ["weektomin 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Minutes",
  factor: 10080
});
