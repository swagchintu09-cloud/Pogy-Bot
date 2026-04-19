const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "list_tool",
  name: "pickitem",
  aliases: ["pickitem"],
  title: "Pick Item",
  description: "Pick Item utility.",
  usage: ["pickitem <item1,item2,item3>"],
  examples: ["pickitem apple,orange,banana"],
  group: "list",
  tool: "pick"
});
