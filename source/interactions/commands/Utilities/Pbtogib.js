const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtogib",
  aliases: ["pbtogib"],
  title: "Petabytes To Gibibytes",
  description: "Convert petabytes to gibibytes.",
  usage: ["pbtogib <value>"],
  examples: ["pbtogib 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Gibibytes",
  factor: 1048576
});
