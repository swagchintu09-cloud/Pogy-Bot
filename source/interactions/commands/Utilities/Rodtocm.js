const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "rodtocm",
  aliases: ["rodtocm"],
  title: "Rods To Centimeters",
  description: "Convert rods to centimeters.",
  usage: ["rodtocm <value>"],
  examples: ["rodtocm 10"],
  group: "conversion",
  fromLabel: "Rods",
  toLabel: "Centimeters",
  factor: 502.92
});
