const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtofurlong",
  aliases: ["cmtofurlong"],
  title: "Centimeters To Furlongs",
  description: "Convert centimeters to furlongs.",
  usage: ["cmtofurlong <value>"],
  examples: ["cmtofurlong 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Furlongs",
  factor: 0.000049709695378986714
});
