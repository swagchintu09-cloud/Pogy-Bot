const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "boop",
    "aliases": [
        "boop"
    ],
    "title": "Boop",
    "description": "Boop a user.",
    "usage": [
        "boop <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** boops **{target}** right on the nose."
    ],
    "cooldown": 2
});
