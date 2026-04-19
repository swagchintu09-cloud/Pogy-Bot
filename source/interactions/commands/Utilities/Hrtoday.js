const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtoday",
  aliases: ["hrtoday"],
  title: "Hours To Days",
  description: "Convert hours to days.",
  usage: ["hrtoday <value>"],
  examples: ["hrtoday 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Days",
  factor: 0.041666666666666664
});
