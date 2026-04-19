const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "reverseitems",
  aliases: ["reverseitems"],
  title: "Reverse Items",
  description: "Reverse Items utility.",
  usage: ["reverseitems <item1,item2,item3>"],
  examples: ["reverseitems apple,orange,banana"],
  group: "list",
  tool: "reverse"
});
