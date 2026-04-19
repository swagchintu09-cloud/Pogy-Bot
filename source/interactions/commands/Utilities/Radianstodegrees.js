const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "radianstodegrees",
  aliases: ["radianstodegrees"],
  title: "Radians To Degrees",
  description: "Radians To Degrees utility.",
  usage: ["radianstodegrees <value>"],
  examples: ["radianstodegrees 42"],
  group: "math",
  compute: (value) => value * (180 / Math.PI)
});
