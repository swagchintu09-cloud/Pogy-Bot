const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtomb",
  aliases: ["gibtomb"],
  title: "Gibibytes To Megabytes",
  description: "Convert gibibytes to megabytes.",
  usage: ["gibtomb <value>"],
  examples: ["gibtomb 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Megabytes",
  factor: 1024
});
