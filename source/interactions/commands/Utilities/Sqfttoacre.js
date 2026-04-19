const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttoacre",
  aliases: ["sqfttoacre"],
  title: "Square Feet To Acres",
  description: "Convert square feet to acres.",
  usage: ["sqfttoacre <value>"],
  examples: ["sqfttoacre 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Acres",
  factor: 0.00002295684113865932
});
