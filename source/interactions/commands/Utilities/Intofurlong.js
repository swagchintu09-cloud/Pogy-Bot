const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intofurlong",
  aliases: ["intofurlong"],
  title: "Inches To Furlongs",
  description: "Convert inches to furlongs.",
  usage: ["intofurlong <value>"],
  examples: ["intofurlong 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Furlongs",
  factor: 0.00012626262626262626
});
