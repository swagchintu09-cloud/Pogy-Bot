const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtomin",
  aliases: ["hrtomin"],
  title: "Hours To Minutes",
  description: "Convert hours to minutes.",
  usage: ["hrtomin <value>"],
  examples: ["hrtomin 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Minutes",
  factor: 60
});
