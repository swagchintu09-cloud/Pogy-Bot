const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektocentury",
  aliases: ["weektocentury"],
  title: "Weeks To Centuries",
  description: "Convert weeks to centuries.",
  usage: ["weektocentury <value>"],
  examples: ["weektocentury 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Centuries",
  factor: 0.0001916495550992471
});
