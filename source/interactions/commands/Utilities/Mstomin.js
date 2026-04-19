const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstomin",
  aliases: ["mstomin"],
  title: "Milliseconds To Minutes",
  description: "Convert milliseconds to minutes.",
  usage: ["mstomin <value>"],
  examples: ["mstomin 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Minutes",
  factor: 0.000016666666666666667
});
