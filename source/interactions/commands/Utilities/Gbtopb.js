const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtopb",
  aliases: ["gbtopb"],
  title: "Gigabytes To Petabytes",
  description: "Convert gigabytes to petabytes.",
  usage: ["gbtopb <value>"],
  examples: ["gbtopb 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Petabytes",
  factor: 9.5367431640625e-7
});
