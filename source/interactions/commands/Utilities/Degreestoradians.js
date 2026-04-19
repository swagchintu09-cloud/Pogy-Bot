const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "degreestoradians",
  aliases: ["degreestoradians"],
  title: "Degrees To Radians",
  description: "Degrees To Radians utility.",
  usage: ["degreestoradians <value>"],
  examples: ["degreestoradians 42"],
  group: "math",
  compute: (value) => value * (Math.PI / 180)
});
