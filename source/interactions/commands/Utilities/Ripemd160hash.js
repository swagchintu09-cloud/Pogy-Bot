const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "ripemd160hash",
  aliases: ["ripemd160hash"],
  title: "RIPEMD160 Hash",
  description: "RIPEMD160 Hash utility.",
  usage: ["ripemd160hash <text>"],
  examples: ["ripemd160hash pogyclient"],
  group: "encoding",
  algorithm: "hash:ripemd160"
});
