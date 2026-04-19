const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretosqm",
  aliases: ["acretosqm"],
  title: "Acres To Square Meters",
  description: "Convert acres to square meters.",
  usage: ["acretosqm <value>"],
  examples: ["acretosqm 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Square Meters",
  factor: 4046.8564224
});
