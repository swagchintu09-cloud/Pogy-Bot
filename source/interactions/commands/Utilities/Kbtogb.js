const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtogb",
  aliases: ["kbtogb"],
  title: "Kilobytes To Gigabytes",
  description: "Convert kilobytes to gigabytes.",
  usage: ["kbtogb <value>"],
  examples: ["kbtogb 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Gigabytes",
  factor: 9.5367431640625e-7
});
