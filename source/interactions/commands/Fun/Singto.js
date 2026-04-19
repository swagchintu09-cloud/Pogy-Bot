const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "singto",
    "aliases": [
        "singto"
    ],
    "title": "Sing To",
    "description": "Sing To a user.",
    "usage": [
        "singto <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** sings to **{target}** like this is a finale scene."
    ],
    "cooldown": 2
});
