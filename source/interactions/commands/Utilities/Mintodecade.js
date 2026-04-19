const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintodecade",
  aliases: ["mintodecade"],
  title: "Minutes To Decades",
  description: "Convert minutes to decades.",
  usage: ["mintodecade <value>"],
  examples: ["mintodecade 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Decades",
  factor: 1.901285268841737e-7
});
