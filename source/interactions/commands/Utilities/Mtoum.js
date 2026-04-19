const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtoum",
  aliases: ["mtoum"],
  title: "Meters To Micrometers",
  description: "Convert meters to micrometers.",
  usage: ["mtoum <value>"],
  examples: ["mtoum 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Micrometers",
  factor: 1000000
});
