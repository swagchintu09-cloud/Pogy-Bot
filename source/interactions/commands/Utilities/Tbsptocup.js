const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptocup",
  aliases: ["tbsptocup"],
  title: "Tablespoons To Cups",
  description: "Convert tablespoons to cups.",
  usage: ["tbsptocup <value>"],
  examples: ["tbsptocup 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Cups",
  factor: 0.0625
});
