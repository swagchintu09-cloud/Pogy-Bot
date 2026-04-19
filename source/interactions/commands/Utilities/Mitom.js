const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitom",
  aliases: ["mitom"],
  title: "Miles To Meters",
  description: "Convert miles to meters.",
  usage: ["mitom <value>"],
  examples: ["mitom 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Meters",
  factor: 1609.344
});
