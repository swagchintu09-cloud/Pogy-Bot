const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "factorial",
  aliases: ["factorial"],
  title: "Factorial",
  description: "Factorial utility.",
  usage: ["factorial <value>"],
  examples: ["factorial 42"],
  group: "math",
  compute: (value) => (() => { const limit = Math.floor(value); if (limit < 0 || limit > 170) return NaN; let total = 1; for (let i = 2; i <= limit; i++) total *= i; return total; })()
});
