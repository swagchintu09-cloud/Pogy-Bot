const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqft",
  aliases: ["acretosqft"],
  title: "Acres To Square Feet",
  description: "Convert acres to square feet.",
  usage: ["acretosqft <value>"],
  examples: ["acretosqft 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Feet",
  factor: 43560
});
