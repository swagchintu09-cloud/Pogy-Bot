const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtoft",
  aliases: ["rodtoft"],
  title: "Rods To Feet",
  description: "Convert rods to feet.",
  usage: ["rodtoft <value>"],
  examples: ["rodtoft 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Feet",
  factor: 16.5
});
