const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "leaguetoft",
  aliases: ["leaguetoft"],
  title: "Leagues To Feet",
  description: "Convert leagues to feet.",
  usage: ["leaguetoft <value>"],
  examples: ["leaguetoft 10"],
  group: "conversion",
  fromLabel: "Leagues",
  toLabel: "Feet",
  factor: 15840
});
