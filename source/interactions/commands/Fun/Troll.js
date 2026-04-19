const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "troll",
    "aliases": [
        "troll"
    ],
    "title": "Troll",
    "description": "Troll a user.",
    "usage": [
        "troll <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** trolls **{target}** for entertainment purposes only."
    ],
    "cooldown": 2
});
