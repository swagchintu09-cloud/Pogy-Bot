const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "hexencode",
  aliases: ["hexencode"],
  title: "Hex Encode",
  description: "Hex Encode utility.",
  usage: ["hexencode <text>"],
  examples: ["hexencode pogyclient"],
  group: "encoding",
  algorithm: "hexencode"
});
