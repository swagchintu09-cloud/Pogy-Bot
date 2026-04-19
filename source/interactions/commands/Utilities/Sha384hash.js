const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "sha384hash",
  aliases: ["sha384hash"],
  title: "SHA384 Hash",
  description: "SHA384 Hash utility.",
  usage: ["sha384hash <text>"],
  examples: ["sha384hash pogyclient"],
  group: "encoding",
  algorithm: "hash:sha384"
});
