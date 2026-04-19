const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "triplecompare",
  aliases: ["triplecompare"],
  title: "Triple Compare",
  description: "Triple Compare utility.",
  usage: ["triplecompare <left> <right>"],
  examples: ["triplecompare 10 20"],
  group: "math",
  compute: (left, right) => (left * 3) - right
});
