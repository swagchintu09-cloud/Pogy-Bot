const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtograin",
  aliases: ["lbtograin"],
  title: "Pounds To Grains",
  description: "Convert pounds to grains.",
  usage: ["lbtograin <value>"],
  examples: ["lbtograin 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Grains",
  factor: 7000.000000000001
});
