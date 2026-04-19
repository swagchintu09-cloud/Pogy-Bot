const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtocarat",
  aliases: ["mgtocarat"],
  title: "Milligrams To Carats",
  description: "Convert milligrams to carats.",
  usage: ["mgtocarat <value>"],
  examples: ["mgtocarat 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Carats",
  factor: 0.004999999999999999
});
