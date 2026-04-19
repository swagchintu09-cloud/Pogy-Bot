const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "isprimehint",
  aliases: ["isprimehint"],
  title: "Prime Hint",
  description: "Prime Hint utility.",
  usage: ["isprimehint <value>"],
  examples: ["isprimehint 42"],
  group: "math",
  compute: (value) => (() => { const n = Math.floor(value); if (n < 2) return 0; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return 0; return 1; })()
});
