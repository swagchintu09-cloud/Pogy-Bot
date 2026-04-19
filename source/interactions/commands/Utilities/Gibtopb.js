const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtopb",
  aliases: ["gibtopb"],
  title: "Gibibytes To Petabytes",
  description: "Convert gibibytes to petabytes.",
  usage: ["gibtopb <value>"],
  examples: ["gibtopb 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Petabytes",
  factor: 9.5367431640625e-7
});
