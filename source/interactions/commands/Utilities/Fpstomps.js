const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fpstomps",
  aliases: ["fpstomps"],
  title: "Feet/Second To Meters/Second",
  description: "Convert feet/second to meters/second.",
  usage: ["fpstomps <value>"],
  examples: ["fpstomps 10"],
  group: "conversion",
  fromLabel: "Feet/Second",
  toLabel: "Meters/Second",
  factor: 0.3048
});
