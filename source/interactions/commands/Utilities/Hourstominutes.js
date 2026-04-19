const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "hourstominutes",
  aliases: ["hourstominutes"],
  title: "Hours To Minutes",
  description: "Hours To Minutes utility.",
  usage: ["hourstominutes <value>"],
  examples: ["hourstominutes 42"],
  group: "math",
  compute: (value) => value * 60
});
