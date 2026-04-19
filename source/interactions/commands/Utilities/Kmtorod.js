const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtorod",
  aliases: ["kmtorod"],
  title: "Kilometers To Rods",
  description: "Convert kilometers to rods.",
  usage: ["kmtorod <value>"],
  examples: ["kmtorod 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Rods",
  factor: 198.83878151594686
});
