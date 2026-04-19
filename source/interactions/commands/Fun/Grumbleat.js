const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "grumbleat",
    "aliases": [
        "grumbleat"
    ],
    "title": "Grumble At",
    "description": "Grumble At a user.",
    "usage": [
        "grumbleat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** grumbles at **{target}** under their breath."
    ],
    "cooldown": 2
});
