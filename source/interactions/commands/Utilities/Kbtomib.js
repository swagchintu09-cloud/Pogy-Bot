const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtomib",
  aliases: ["kbtomib"],
  title: "Kilobytes To Mebibytes",
  description: "Convert kilobytes to mebibytes.",
  usage: ["kbtomib <value>"],
  examples: ["kbtomib 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Mebibytes",
  factor: 0.0009765625
});
