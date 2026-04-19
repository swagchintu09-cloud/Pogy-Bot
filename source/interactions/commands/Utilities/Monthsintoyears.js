const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "monthsintoyears",
  aliases: ["monthsintoyears"],
  title: "Months Into Years",
  description: "Months Into Years utility.",
  usage: ["monthsintoyears <value>"],
  examples: ["monthsintoyears 42"],
  group: "math",
  compute: (value) => value / 12
});
