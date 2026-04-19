const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "htmlencode",
  aliases: ["htmlencode"],
  title: "HTML Encode",
  description: "HTML Encode utility.",
  usage: ["htmlencode <text>"],
  examples: ["htmlencode pogyclient"],
  group: "encoding",
  algorithm: "htmlencode"
});
