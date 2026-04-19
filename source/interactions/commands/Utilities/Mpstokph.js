const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mpstokph",
  aliases: ["mpstokph"],
  title: "Meters/Second To Kilometers/Hour",
  description: "Convert meters/second to kilometers/hour.",
  usage: ["mpstokph <value>"],
  examples: ["mpstokph 10"],
  group: "conversion",
  fromLabel: "Meters/Second",
  toLabel: "Kilometers/Hour",
  factor: 3.599999999712
});
