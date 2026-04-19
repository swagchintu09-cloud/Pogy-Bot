const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "flexon",
    "aliases": [
        "flexon"
    ],
    "title": "Flex On",
    "description": "Flex On a user.",
    "usage": [
        "flexon <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** flexes on **{target}** for no reason at all."
    ],
    "cooldown": 2
});
