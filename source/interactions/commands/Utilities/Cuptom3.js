const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptom3",
  aliases: ["cuptom3"],
  title: "Cups To Cubic Meters",
  description: "Convert cups to cubic meters.",
  usage: ["cuptom3 <value>"],
  examples: ["cuptom3 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Cubic Meters",
  factor: 0.00023658823649999998
});
