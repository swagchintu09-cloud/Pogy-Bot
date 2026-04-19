const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintoday",
  aliases: ["mintoday"],
  title: "Minutes To Days",
  description: "Convert minutes to days.",
  usage: ["mintoday <value>"],
  examples: ["mintoday 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Days",
  factor: 0.0006944444444444445
});
