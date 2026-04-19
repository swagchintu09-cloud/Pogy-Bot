const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektoday",
  aliases: ["weektoday"],
  title: "Weeks To Days",
  description: "Convert weeks to days.",
  usage: ["weektoday <value>"],
  examples: ["weektoday 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Days",
  factor: 7
});
