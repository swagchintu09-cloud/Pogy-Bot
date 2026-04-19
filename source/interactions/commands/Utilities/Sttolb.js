const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttolb",
  aliases: ["sttolb"],
  title: "Stone To Pounds",
  description: "Convert stone to pounds.",
  usage: ["sttolb <value>"],
  examples: ["sttolb 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Pounds",
  factor: 14
});
