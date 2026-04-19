const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintohr",
  aliases: ["mintohr"],
  title: "Minutes To Hours",
  description: "Convert minutes to hours.",
  usage: ["mintohr <value>"],
  examples: ["mintohr 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Hours",
  factor: 0.016666666666666666
});
