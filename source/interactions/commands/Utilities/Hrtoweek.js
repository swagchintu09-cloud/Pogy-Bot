const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtoweek",
  aliases: ["hrtoweek"],
  title: "Hours To Weeks",
  description: "Convert hours to weeks.",
  usage: ["hrtoweek <value>"],
  examples: ["hrtoweek 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Weeks",
  factor: 0.005952380952380952
});
