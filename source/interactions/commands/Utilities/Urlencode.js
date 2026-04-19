const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "urlencode",
  aliases: ["urlencode"],
  title: "URL Encode",
  description: "URL Encode utility.",
  usage: ["urlencode <text>"],
  examples: ["urlencode pogyclient"],
  group: "encoding",
  algorithm: "urlencode"
});
