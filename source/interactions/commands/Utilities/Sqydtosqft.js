const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtosqft",
  aliases: ["sqydtosqft"],
  title: "Square Yards To Square Feet",
  description: "Convert square yards to square feet.",
  usage: ["sqydtosqft <value>"],
  examples: ["sqydtosqft 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Square Feet",
  factor: 9
});
