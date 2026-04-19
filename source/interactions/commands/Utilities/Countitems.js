const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "countitems",
  aliases: ["countitems"],
  title: "Count Items",
  description: "Count Items utility.",
  usage: ["countitems <item1,item2,item3>"],
  examples: ["countitems apple,orange,banana"],
  group: "list",
  tool: "count"
});
