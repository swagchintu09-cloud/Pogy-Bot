const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtokg",
  aliases: ["mgtokg"],
  title: "Milligrams To Kilograms",
  description: "Convert milligrams to kilograms.",
  usage: ["mgtokg <value>"],
  examples: ["mgtokg 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Kilograms",
  factor: 0.000001
});
