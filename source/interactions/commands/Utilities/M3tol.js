const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3tol",
  aliases: ["m3tol"],
  title: "Cubic Meters To Liters",
  description: "Convert cubic meters to liters.",
  usage: ["m3tol <value>"],
  examples: ["m3tol 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Liters",
  factor: 1000
});
