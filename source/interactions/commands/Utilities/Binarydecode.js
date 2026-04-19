const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "encode",
  name: "binarydecode",
  aliases: ["binarydecode"],
  title: "Binary Decode",
  description: "Binary Decode utility.",
  usage: ["binarydecode <text>"],
  examples: ["binarydecode pogyclient"],
  group: "encoding",
  algorithm: "binarydecode"
});
