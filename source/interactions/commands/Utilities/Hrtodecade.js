const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtodecade",
  aliases: ["hrtodecade"],
  title: "Hours To Decades",
  description: "Convert hours to decades.",
  usage: ["hrtodecade <value>"],
  examples: ["hrtodecade 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Decades",
  factor: 0.000011407711613050422
});
