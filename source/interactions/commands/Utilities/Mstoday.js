const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstoday",
  aliases: ["mstoday"],
  title: "Milliseconds To Days",
  description: "Convert milliseconds to days.",
  usage: ["mstoday <value>"],
  examples: ["mstoday 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Days",
  factor: 1.1574074074074074e-8
});
