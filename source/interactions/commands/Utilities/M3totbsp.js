const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3totbsp",
  aliases: ["m3totbsp"],
  title: "Cubic Meters To Tablespoons",
  description: "Convert cubic meters to tablespoons.",
  usage: ["m3totbsp <value>"],
  examples: ["m3totbsp 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Tablespoons",
  factor: 67628.045403686
});
