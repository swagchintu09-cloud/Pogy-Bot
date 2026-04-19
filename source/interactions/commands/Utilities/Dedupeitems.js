const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "dedupeitems",
  aliases: ["dedupeitems"],
  title: "Dedupe Items",
  description: "Dedupe Items utility.",
  usage: ["dedupeitems <item1,item2,item3>"],
  examples: ["dedupeitems apple,orange,banana"],
  group: "list",
  tool: "dedupe"
});
