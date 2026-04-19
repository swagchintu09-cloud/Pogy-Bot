const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "stripnumbers",
  aliases: ["stripnumbers"],
  title: "Strip Numbers",
  description: "Transform text using strip numbers.",
  usage: ["stripnumbers <text>"],
  examples: ["stripnumbers hello world"],
  group: "text",
  transform: "stripnumbers"
});
