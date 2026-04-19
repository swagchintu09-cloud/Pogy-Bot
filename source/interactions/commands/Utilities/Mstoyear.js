const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstoyear",
  aliases: ["mstoyear"],
  title: "Milliseconds To Years",
  description: "Convert milliseconds to years.",
  usage: ["mstoyear <value>"],
  examples: ["mstoyear 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Years",
  factor: 3.168808781402895e-11
});
