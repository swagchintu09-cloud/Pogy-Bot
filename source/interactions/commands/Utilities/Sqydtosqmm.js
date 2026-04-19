const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtosqmm",
  aliases: ["sqydtosqmm"],
  title: "Square Yards To Square Millimeters",
  description: "Convert square yards to square millimeters.",
  usage: ["sqydtosqmm <value>"],
  examples: ["sqydtosqmm 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Square Millimeters",
  factor: 836127.36
});
