const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "perimeterrect",
  aliases: ["perimeterrect"],
  title: "Rectangle Perimeter",
  description: "Rectangle Perimeter utility.",
  usage: ["perimeterrect <left> <right>"],
  examples: ["perimeterrect 10 20"],
  group: "math",
  compute: (left, right) => (2 * left) + (2 * right)
});
