const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitonm",
  aliases: ["mitonm"],
  title: "Miles To Nanometers",
  description: "Convert miles to nanometers.",
  usage: ["mitonm <value>"],
  examples: ["mitonm 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Nanometers",
  factor: 1609344000000
});
