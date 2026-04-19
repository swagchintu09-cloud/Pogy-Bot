const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtolb",
  aliases: ["mgtolb"],
  title: "Milligrams To Pounds",
  description: "Convert milligrams to pounds.",
  usage: ["mgtolb <value>"],
  examples: ["mgtolb 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Pounds",
  factor: 0.0000022046226218487755
});
