const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtocarat",
  aliases: ["kgtocarat"],
  title: "Kilograms To Carats",
  description: "Convert kilograms to carats.",
  usage: ["kgtocarat <value>"],
  examples: ["kgtocarat 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Carats",
  factor: 5000
});
