const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintoyear",
  aliases: ["mintoyear"],
  title: "Minutes To Years",
  description: "Convert minutes to years.",
  usage: ["mintoyear <value>"],
  examples: ["mintoyear 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Years",
  factor: 0.000001901285268841737
});
