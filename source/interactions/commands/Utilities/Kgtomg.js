const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtomg",
  aliases: ["kgtomg"],
  title: "Kilograms To Milligrams",
  description: "Convert kilograms to milligrams.",
  usage: ["kgtomg <value>"],
  examples: ["kgtomg 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Milligrams",
  factor: 1000000
});
