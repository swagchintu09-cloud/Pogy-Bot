const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtoleague",
  aliases: ["cmtoleague"],
  title: "Centimeters To Leagues",
  description: "Convert centimeters to leagues.",
  usage: ["cmtoleague <value>"],
  examples: ["cmtoleague 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Leagues",
  factor: 0.00000207123730745778
});
