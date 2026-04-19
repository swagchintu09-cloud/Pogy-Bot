const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pttocup",
  aliases: ["pttocup"],
  title: "Pints To Cups",
  description: "Convert pints to cups.",
  usage: ["pttocup <value>"],
  examples: ["pttocup 10"],
  group: "conversion",
  fromLabel: "Pints",
  toLabel: "Cups",
  factor: 2
});
