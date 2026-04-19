const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtosqcm",
  aliases: ["sqydtosqcm"],
  title: "Square Yards To Square Centimeters",
  description: "Convert square yards to square centimeters.",
  usage: ["sqydtosqcm <value>"],
  examples: ["sqydtosqcm 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Square Centimeters",
  factor: 8361.273599999999
});
