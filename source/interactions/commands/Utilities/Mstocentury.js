const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstocentury",
  aliases: ["mstocentury"],
  title: "Milliseconds To Centuries",
  description: "Convert milliseconds to centuries.",
  usage: ["mstocentury <value>"],
  examples: ["mstocentury 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Centuries",
  factor: 3.168808781402895e-13
});
