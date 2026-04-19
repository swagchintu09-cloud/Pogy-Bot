const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstoweek",
  aliases: ["mstoweek"],
  title: "Milliseconds To Weeks",
  description: "Convert milliseconds to weeks.",
  usage: ["mstoweek <value>"],
  examples: ["mstoweek 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Weeks",
  factor: 1.6534391534391535e-9
});
