const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "sha224hash",
  aliases: ["sha224hash"],
  title: "SHA224 Hash",
  description: "SHA224 Hash utility.",
  usage: ["sha224hash <text>"],
  examples: ["sha224hash pogyclient"],
  group: "encoding",
  algorithm: "hash:sha224"
});
