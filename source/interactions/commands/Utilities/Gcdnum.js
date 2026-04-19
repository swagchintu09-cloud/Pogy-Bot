const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "gcdnum",
  aliases: ["gcdnum"],
  title: "Greatest Common Divisor",
  description: "Greatest Common Divisor utility.",
  usage: ["gcdnum <left> <right>"],
  examples: ["gcdnum 10 20"],
  group: "math",
  compute: (left, right) => (() => { let a = Math.abs(Math.round(left)); let b = Math.abs(Math.round(right)); while (b) { const t = b; b = a % b; a = t; } return a; })()
});
