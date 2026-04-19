const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintoweek",
  aliases: ["mintoweek"],
  title: "Minutes To Weeks",
  description: "Convert minutes to weeks.",
  usage: ["mintoweek <value>"],
  examples: ["mintoweek 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Weeks",
  factor: 0.0000992063492063492
});
