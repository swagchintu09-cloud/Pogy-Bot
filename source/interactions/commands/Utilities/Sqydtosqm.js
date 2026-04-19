const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtosqm",
  aliases: ["sqydtosqm"],
  title: "Square Yards To Square Meters",
  description: "Convert square yards to square meters.",
  usage: ["sqydtosqm <value>"],
  examples: ["sqydtosqm 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Square Meters",
  factor: 0.83612736
});
