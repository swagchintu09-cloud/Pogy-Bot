const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "rightpercentageofleft",
  aliases: ["rightpercentageofleft"],
  title: "Right As Percent Of Left",
  description: "Right As Percent Of Left utility.",
  usage: ["rightpercentageofleft <left> <right>"],
  examples: ["rightpercentageofleft 10 20"],
  group: "math",
  compute: (left, right) => left === 0 ? NaN : (right / left) * 100
});
