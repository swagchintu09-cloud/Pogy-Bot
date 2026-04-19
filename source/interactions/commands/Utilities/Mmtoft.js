const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtoft",
  aliases: ["mmtoft"],
  title: "Millimeters To Feet",
  description: "Convert millimeters to feet.",
  usage: ["mmtoft <value>"],
  examples: ["mmtoft 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Feet",
  factor: 0.0032808398950131233
});
