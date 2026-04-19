const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitoum",
  aliases: ["mitoum"],
  title: "Miles To Micrometers",
  description: "Convert miles to micrometers.",
  usage: ["mitoum <value>"],
  examples: ["mitoum 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Micrometers",
  factor: 1609344000.0000002
});
