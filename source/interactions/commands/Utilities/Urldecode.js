const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "urldecode",
  aliases: ["urldecode"],
  title: "URL Decode",
  description: "URL Decode utility.",
  usage: ["urldecode <text>"],
  examples: ["urldecode pogyclient"],
  group: "encoding",
  algorithm: "urldecode"
});
