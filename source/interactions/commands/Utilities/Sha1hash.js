const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "sha1hash",
  aliases: ["sha1hash"],
  title: "SHA1 Hash",
  description: "SHA1 Hash utility.",
  usage: ["sha1hash <text>"],
  examples: ["sha1hash pogyclient"],
  group: "encoding",
  algorithm: "hash:sha1"
});
