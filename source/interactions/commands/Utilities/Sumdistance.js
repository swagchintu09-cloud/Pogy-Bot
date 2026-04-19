const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "sumdistance",
  aliases: ["sumdistance"],
  title: "Absolute Difference",
  description: "Absolute Difference utility.",
  usage: ["sumdistance <left> <right>"],
  examples: ["sumdistance 10 20"],
  group: "math",
  compute: (left, right) => Math.abs(left - right)
});
