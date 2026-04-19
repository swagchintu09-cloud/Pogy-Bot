const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "cherish",
    "aliases": [
        "cherish"
    ],
    "title": "Cherish",
    "description": "Cherish a user.",
    "usage": [
        "cherish <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** cherishes **{target}** like premium loot."
    ],
    "cooldown": 2
});
