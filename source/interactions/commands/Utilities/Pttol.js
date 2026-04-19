const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttol",
  aliases: ["pttol"],
  title: "Pints To Liters",
  description: "Convert pints to liters.",
  usage: ["pttol <value>"],
  examples: ["pttol 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Liters",
  factor: 0.473176473
});
