const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtonm",
  aliases: ["mtonm"],
  title: "Meters To Nanometers",
  description: "Convert meters to nanometers.",
  usage: ["mtonm <value>"],
  examples: ["mtonm 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Nanometers",
  factor: 999999999.9999999
});
