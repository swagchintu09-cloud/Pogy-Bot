const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtoacre",
  aliases: ["sqcmtoacre"],
  title: "Square Centimeters To Acres",
  description: "Convert square centimeters to acres.",
  usage: ["sqcmtoacre <value>"],
  examples: ["sqcmtoacre 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Acres",
  factor: 2.4710538146716536e-8
});
