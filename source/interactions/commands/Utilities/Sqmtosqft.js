const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtosqft",
  aliases: ["sqmtosqft"],
  title: "Square Meters To Square Feet",
  description: "Convert square meters to square feet.",
  usage: ["sqmtosqft <value>"],
  examples: ["sqmtosqft 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Square Feet",
  factor: 10.763910416709722
});
