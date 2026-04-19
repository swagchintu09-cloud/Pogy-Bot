const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtofurlong",
  aliases: ["rodtofurlong"],
  title: "Rods To Furlongs",
  description: "Convert rods to furlongs.",
  usage: ["rodtofurlong <value>"],
  examples: ["rodtofurlong 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Furlongs",
  factor: 0.025
});
