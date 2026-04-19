const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mpstofps",
  aliases: ["mpstofps"],
  title: "Meters/Second To Feet/Second",
  description: "Convert meters/second to feet/second.",
  usage: ["mpstofps <value>"],
  examples: ["mpstofps 10"],
  group: "conversion",
  fromLabel: "Meters/Second",
  toLabel: "Feet/Second",
  factor: 3.280839895013123
});
