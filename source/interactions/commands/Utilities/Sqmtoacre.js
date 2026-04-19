const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtoacre",
  aliases: ["sqmtoacre"],
  title: "Square Meters To Acres",
  description: "Convert square meters to acres.",
  usage: ["sqmtoacre <value>"],
  examples: ["sqmtoacre 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Acres",
  factor: 0.0002471053814671653
});
