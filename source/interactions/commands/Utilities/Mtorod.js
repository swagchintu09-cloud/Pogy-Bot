const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtorod",
  aliases: ["mtorod"],
  title: "Meters To Rods",
  description: "Convert meters to rods.",
  usage: ["mtorod <value>"],
  examples: ["mtorod 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Rods",
  factor: 0.19883878151594686
});
