const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "binaryencode",
  aliases: ["binaryencode"],
  title: "Binary Encode",
  description: "Binary Encode utility.",
  usage: ["binaryencode <text>"],
  examples: ["binaryencode pogyclient"],
  group: "encoding",
  algorithm: "binaryencode"
});
