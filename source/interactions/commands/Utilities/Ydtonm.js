const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtonm",
  aliases: ["ydtonm"],
  title: "Yards To Nanometers",
  description: "Convert yards to nanometers.",
  usage: ["ydtonm <value>"],
  examples: ["ydtonm 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Nanometers",
  factor: 914399999.9999999
});
