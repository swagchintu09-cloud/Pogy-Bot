const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstohr",
  aliases: ["mstohr"],
  title: "Milliseconds To Hours",
  description: "Convert milliseconds to hours.",
  usage: ["mstohr <value>"],
  examples: ["mstohr 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Hours",
  factor: 2.7777777777777776e-7
});
