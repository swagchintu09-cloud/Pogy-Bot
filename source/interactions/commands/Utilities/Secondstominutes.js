const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "secondstominutes",
  aliases: ["secondstominutes"],
  title: "Seconds To Minutes",
  description: "Seconds To Minutes utility.",
  usage: ["secondstominutes <value>"],
  examples: ["secondstominutes 42"],
  group: "math",
  compute: (value) => value / 60
});
