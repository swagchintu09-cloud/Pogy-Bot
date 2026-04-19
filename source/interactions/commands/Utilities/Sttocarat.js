const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttocarat",
  aliases: ["sttocarat"],
  title: "Stone To Carats",
  description: "Convert stone to carats.",
  usage: ["sttocarat <value>"],
  examples: ["sttocarat 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Carats",
  factor: 31751.4659
});
