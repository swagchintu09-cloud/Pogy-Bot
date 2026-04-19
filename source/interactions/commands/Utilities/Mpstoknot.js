const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mpstoknot",
  aliases: ["mpstoknot"],
  title: "Meters/Second To Knots",
  description: "Convert meters/second to knots.",
  usage: ["mpstoknot <value>"],
  examples: ["mpstoknot 10"],
  group: "conversion",
  fromLabel: "Meters/Second",
  toLabel: "Knots",
  factor: 1.9438444926085394
});
