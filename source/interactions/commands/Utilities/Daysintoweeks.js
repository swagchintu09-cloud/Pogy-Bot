const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "daysintoweeks",
  aliases: ["daysintoweeks"],
  title: "Days Into Weeks",
  description: "Days Into Weeks utility.",
  usage: ["daysintoweeks <value>"],
  examples: ["daysintoweeks 42"],
  group: "math",
  compute: (value) => value / 7
});
