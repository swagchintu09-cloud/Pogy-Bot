const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "md5hash",
  aliases: ["md5hash"],
  title: "MD5 Hash",
  description: "MD5 Hash utility.",
  usage: ["md5hash <text>"],
  examples: ["md5hash pogyclient"],
  group: "encoding",
  algorithm: "hash:md5"
});
