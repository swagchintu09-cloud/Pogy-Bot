const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "base64decode",
  aliases: ["base64decode"],
  title: "Base64 Decode",
  description: "Base64 Decode utility.",
  usage: ["base64decode <text>"],
  examples: ["base64decode pogyclient"],
  group: "encoding",
  algorithm: "base64decode"
});
