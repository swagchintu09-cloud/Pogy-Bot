const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtoleague",
  aliases: ["nmtoleague"],
  title: "Nanometers To Leagues",
  description: "Convert nanometers to leagues.",
  usage: ["nmtoleague <value>"],
  examples: ["nmtoleague 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Leagues",
  factor: 2.07123730745778e-13
});
