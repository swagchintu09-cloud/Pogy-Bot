const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtonm",
  aliases: ["kmtonm"],
  title: "Kilometers To Nanometers",
  description: "Convert kilometers to nanometers.",
  usage: ["kmtonm <value>"],
  examples: ["kmtonm 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Nanometers",
  factor: 999999999999.9999
});
