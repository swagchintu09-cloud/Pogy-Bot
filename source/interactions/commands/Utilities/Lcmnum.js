const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "lcmnum",
  aliases: ["lcmnum"],
  title: "Least Common Multiple",
  description: "Least Common Multiple utility.",
  usage: ["lcmnum <left> <right>"],
  examples: ["lcmnum 10 20"],
  group: "math",
  compute: (left, right) => (() => { let a = Math.abs(Math.round(left)); let b = Math.abs(Math.round(right)); if (!a || !b) return 0; const gcd = (() => { let x = a; let y = b; while (y) { const t = y; y = x % y; x = t; } return x; })(); return Math.abs(a * b) / gcd; })()
});
