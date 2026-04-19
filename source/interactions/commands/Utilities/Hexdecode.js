const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "hexdecode",
  aliases: ["hexdecode"],
  title: "Hex Decode",
  description: "Hex Decode utility.",
  usage: ["hexdecode <text>"],
  examples: ["hexdecode pogyclient"],
  group: "encoding",
  algorithm: "hexdecode"
});
