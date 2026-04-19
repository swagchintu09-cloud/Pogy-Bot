const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintosec",
  aliases: ["mintosec"],
  title: "Minutes To Seconds",
  description: "Convert minutes to seconds.",
  usage: ["mintosec <value>"],
  examples: ["mintosec 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Seconds",
  factor: 60
});
