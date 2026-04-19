const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttomg",
  aliases: ["sttomg"],
  title: "Stone To Milligrams",
  description: "Convert stone to milligrams.",
  usage: ["sttomg <value>"],
  examples: ["sttomg 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Milligrams",
  factor: 6350293.180000001
});
