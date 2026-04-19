const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "lnvalue",
  aliases: ["lnvalue"],
  title: "Natural Log",
  description: "Natural Log utility.",
  usage: ["lnvalue <value>"],
  examples: ["lnvalue 42"],
  group: "math",
  compute: (value) => Math.log(value)
});
