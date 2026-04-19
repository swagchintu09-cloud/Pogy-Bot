const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttotbsp",
  aliases: ["pttotbsp"],
  title: "Pints To Tablespoons",
  description: "Convert pints to tablespoons.",
  usage: ["pttotbsp <value>"],
  examples: ["pttotbsp 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Tablespoons",
  factor: 32
});
