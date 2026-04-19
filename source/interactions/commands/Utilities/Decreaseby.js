const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "decreaseby",
  aliases: ["decreaseby"],
  title: "Decrease By",
  description: "Decrease By utility.",
  usage: ["decreaseby <left> <right>"],
  examples: ["decreaseby 10 20"],
  group: "math",
  compute: (left, right) => left - right
});
