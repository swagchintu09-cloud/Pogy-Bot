const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintoms",
  aliases: ["mintoms"],
  title: "Minutes To Milliseconds",
  description: "Convert minutes to milliseconds.",
  usage: ["mintoms <value>"],
  examples: ["mintoms 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Milliseconds",
  factor: 60000
});
