const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtom",
  aliases: ["cmtom"],
  title: "Centimeters To Meters",
  description: "Convert centimeters to meters.",
  usage: ["cmtom <value>"],
  examples: ["cmtom 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Meters",
  factor: 0.01
});
