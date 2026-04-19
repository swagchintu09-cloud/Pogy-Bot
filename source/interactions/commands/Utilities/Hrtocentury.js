const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtocentury",
  aliases: ["hrtocentury"],
  title: "Hours To Centuries",
  description: "Convert hours to centuries.",
  usage: ["hrtocentury <value>"],
  examples: ["hrtocentury 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Centuries",
  factor: 0.0000011407711613050422
});
