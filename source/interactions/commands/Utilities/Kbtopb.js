const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtopb",
  aliases: ["kbtopb"],
  title: "Kilobytes To Petabytes",
  description: "Convert kilobytes to petabytes.",
  usage: ["kbtopb <value>"],
  examples: ["kbtopb 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Petabytes",
  factor: 9.094947017729282e-13
});
