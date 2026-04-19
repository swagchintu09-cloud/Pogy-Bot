const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "clap",
  aliases: ["clap"],
  title: "Clap Text",
  description: "Transform text using clap text.",
  usage: ["clap <text>"],
  examples: ["clap hello world"],
  group: "text",
  transform: "clap"
});
