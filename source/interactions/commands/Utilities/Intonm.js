const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intonm",
  aliases: ["intonm"],
  title: "Inches To Nanometers",
  description: "Convert inches to nanometers.",
  usage: ["intonm <value>"],
  examples: ["intonm 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Nanometers",
  factor: 25399999.999999996
});
