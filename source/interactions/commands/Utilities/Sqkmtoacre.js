const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtoacre",
  aliases: ["sqkmtoacre"],
  title: "Square Kilometers To Acres",
  description: "Convert square kilometers to acres.",
  usage: ["sqkmtoacre <value>"],
  examples: ["sqkmtoacre 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Acres",
  factor: 247.10538146716533
});
