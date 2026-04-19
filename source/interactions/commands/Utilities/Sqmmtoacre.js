const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtoacre",
  aliases: ["sqmmtoacre"],
  title: "Square Millimeters To Acres",
  description: "Convert square millimeters to acres.",
  usage: ["sqmmtoacre <value>"],
  examples: ["sqmmtoacre 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Acres",
  factor: 2.471053814671653e-10
});
