const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "praise",
    "aliases": [
        "praise"
    ],
    "title": "Praise",
    "description": "Praise a user.",
    "usage": [
        "praise <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** praises **{target}** like a true supporter."
    ],
    "cooldown": 2
});
