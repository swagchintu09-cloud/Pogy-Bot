const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "sha512hash",
  aliases: ["sha512hash"],
  title: "SHA512 Hash",
  description: "SHA512 Hash utility.",
  usage: ["sha512hash <text>"],
  examples: ["sha512hash pogyclient"],
  group: "encoding",
  algorithm: "hash:sha512"
});
