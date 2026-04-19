const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "shuffleitems",
  aliases: ["shuffleitems"],
  title: "Shuffle Items",
  description: "Shuffle Items utility.",
  usage: ["shuffleitems <item1,item2,item3>"],
  examples: ["shuffleitems apple,orange,banana"],
  group: "list",
  tool: "shuffle"
});
