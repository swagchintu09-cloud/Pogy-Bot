const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbsptoml",
  aliases: ["tbsptoml"],
  title: "Tablespoons To Milliliters",
  description: "Convert tablespoons to milliliters.",
  usage: ["tbsptoml <value>"],
  examples: ["tbsptoml 10"],
  group: "conversion",
  fromLabel: "Tablespoons",
  toLabel: "Milliliters",
  factor: 14.78676478125
});
