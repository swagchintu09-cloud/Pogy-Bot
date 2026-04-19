const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "sortitems",
  aliases: ["sortitems"],
  title: "Sort Items",
  description: "Sort Items utility.",
  usage: ["sortitems <item1,item2,item3>"],
  examples: ["sortitems apple,orange,banana"],
  group: "list",
  tool: "sort"
});
