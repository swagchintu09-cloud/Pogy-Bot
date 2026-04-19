const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "base64encode",
  aliases: ["base64encode"],
  title: "Base64 Encode",
  description: "Base64 Encode utility.",
  usage: ["base64encode <text>"],
  examples: ["base64encode pogyclient"],
  group: "encoding",
  algorithm: "base64encode"
});
