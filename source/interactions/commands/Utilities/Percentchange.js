const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "percentchange",
  aliases: ["percentchange"],
  title: "Percent Change",
  description: "Percent Change utility.",
  usage: ["percentchange <left> <right>"],
  examples: ["percentchange 10 20"],
  group: "math",
  compute: (left, right) => left === 0 ? NaN : ((right - left) / left) * 100
});
