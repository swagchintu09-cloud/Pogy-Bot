const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intom",
  aliases: ["intom"],
  title: "Inches To Meters",
  description: "Convert inches to meters.",
  usage: ["intom <value>"],
  examples: ["intom 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Meters",
  factor: 0.0254
});
