const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "glare",
    "aliases": [
        "glare"
    ],
    "title": "Glare",
    "description": "Glare a user.",
    "usage": [
        "glare <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** glares at **{target}** from across the chat."
    ],
    "cooldown": 2
});
