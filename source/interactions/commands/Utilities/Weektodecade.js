const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektodecade",
  aliases: ["weektodecade"],
  title: "Weeks To Decades",
  description: "Convert weeks to decades.",
  usage: ["weektodecade <value>"],
  examples: ["weektodecade 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Decades",
  factor: 0.0019164955509924709
});
