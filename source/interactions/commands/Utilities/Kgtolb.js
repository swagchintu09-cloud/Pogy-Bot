const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtolb",
  aliases: ["kgtolb"],
  title: "Kilograms To Pounds",
  description: "Convert kilograms to pounds.",
  usage: ["kgtolb <value>"],
  examples: ["kgtolb 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Pounds",
  factor: 2.2046226218487757
});
