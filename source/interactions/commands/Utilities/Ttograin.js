const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttograin",
  aliases: ["ttograin"],
  title: "Metric Tons To Grains",
  description: "Convert metric tons to grains.",
  usage: ["ttograin <value>"],
  examples: ["ttograin 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Grains",
  factor: 15432358.352941431
});
