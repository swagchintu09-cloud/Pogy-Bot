const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetoweek",
  aliases: ["decadetoweek"],
  title: "Decades To Weeks",
  description: "Convert decades to weeks.",
  usage: ["decadetoweek <value>"],
  examples: ["decadetoweek 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Weeks",
  factor: 521.7857142857143
});
