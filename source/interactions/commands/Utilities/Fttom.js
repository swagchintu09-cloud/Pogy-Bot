const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttom",
  aliases: ["fttom"],
  title: "Feet To Meters",
  description: "Convert feet to meters.",
  usage: ["fttom <value>"],
  examples: ["fttom 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Meters",
  factor: 0.3048
});
