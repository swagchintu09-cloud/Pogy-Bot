const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtoum",
  aliases: ["ydtoum"],
  title: "Yards To Micrometers",
  description: "Convert yards to micrometers.",
  usage: ["ydtoum <value>"],
  examples: ["ydtoum 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Micrometers",
  factor: 914400
});
