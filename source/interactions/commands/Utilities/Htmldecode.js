const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "htmldecode",
  aliases: ["htmldecode"],
  title: "HTML Decode",
  description: "HTML Decode utility.",
  usage: ["htmldecode <text>"],
  examples: ["htmldecode pogyclient"],
  group: "encoding",
  algorithm: "htmldecode"
});
