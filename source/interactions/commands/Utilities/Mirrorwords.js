const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "mirrorwords",
  aliases: ["mirrorwords"],
  title: "Mirror Words",
  description: "Transform text using mirror words.",
  usage: ["mirrorwords <text>"],
  examples: ["mirrorwords hello world"],
  group: "text",
  transform: "mirrorwords"
});
