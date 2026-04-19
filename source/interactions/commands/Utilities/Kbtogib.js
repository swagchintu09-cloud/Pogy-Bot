const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtogib",
  aliases: ["kbtogib"],
  title: "Kilobytes To Gibibytes",
  description: "Convert kilobytes to gibibytes.",
  usage: ["kbtogib <value>"],
  examples: ["kbtogib 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Gibibytes",
  factor: 9.5367431640625e-7
});
