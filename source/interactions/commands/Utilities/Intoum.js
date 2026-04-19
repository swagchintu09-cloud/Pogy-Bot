const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intoum",
  aliases: ["intoum"],
  title: "Inches To Micrometers",
  description: "Convert inches to micrometers.",
  usage: ["intoum <value>"],
  examples: ["intoum 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Micrometers",
  factor: 25400
});
