const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtoft",
  aliases: ["mtoft"],
  title: "Meters To Feet",
  description: "Convert meters to feet.",
  usage: ["mtoft <value>"],
  examples: ["mtoft 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Feet",
  factor: 3.280839895013123
});
