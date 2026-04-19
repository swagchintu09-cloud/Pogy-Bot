const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtoms",
  aliases: ["hrtoms"],
  title: "Hours To Milliseconds",
  description: "Convert hours to milliseconds.",
  usage: ["hrtoms <value>"],
  examples: ["hrtoms 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Milliseconds",
  factor: 3600000
});
