const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtoleague",
  aliases: ["mmtoleague"],
  title: "Millimeters To Leagues",
  description: "Convert millimeters to leagues.",
  usage: ["mmtoleague <value>"],
  examples: ["mmtoleague 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Leagues",
  factor: 2.07123730745778e-7
});
