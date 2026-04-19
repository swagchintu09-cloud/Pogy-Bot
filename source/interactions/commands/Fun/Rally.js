const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "rally",
    "aliases": [
        "rally"
    ],
    "title": "Rally",
    "description": "Rally a user.",
    "usage": [
        "rally <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** rallies behind **{target}** like a full campaign manager."
    ],
    "cooldown": 2
});
