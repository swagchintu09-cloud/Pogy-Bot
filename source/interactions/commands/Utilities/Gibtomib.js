const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtomib",
  aliases: ["gibtomib"],
  title: "Gibibytes To Mebibytes",
  description: "Convert gibibytes to mebibytes.",
  usage: ["gibtomib <value>"],
  examples: ["gibtomib 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Mebibytes",
  factor: 1024
});
