const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtogib",
  aliases: ["gbtogib"],
  title: "Gigabytes To Gibibytes",
  description: "Convert gigabytes to gibibytes.",
  usage: ["gbtogib <value>"],
  examples: ["gbtogib 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Gibibytes",
  factor: 1
});
