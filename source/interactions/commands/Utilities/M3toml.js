const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3toml",
  aliases: ["m3toml"],
  title: "Cubic Meters To Milliliters",
  description: "Convert cubic meters to milliliters.",
  usage: ["m3toml <value>"],
  examples: ["m3toml 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Milliliters",
  factor: 1000000
});
