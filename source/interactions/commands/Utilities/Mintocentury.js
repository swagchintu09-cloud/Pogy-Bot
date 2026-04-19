const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintocentury",
  aliases: ["mintocentury"],
  title: "Minutes To Centuries",
  description: "Convert minutes to centuries.",
  usage: ["mintocentury <value>"],
  examples: ["mintocentury 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Centuries",
  factor: 1.901285268841737e-8
});
