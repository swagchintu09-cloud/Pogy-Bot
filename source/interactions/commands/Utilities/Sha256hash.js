const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "sha256hash",
  aliases: ["sha256hash"],
  title: "SHA256 Hash",
  description: "SHA256 Hash utility.",
  usage: ["sha256hash <text>"],
  examples: ["sha256hash pogyclient"],
  group: "encoding",
  algorithm: "hash:sha256"
});
