const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "pointat",
    "aliases": [
        "pointat"
    ],
    "title": "Point At",
    "description": "Point At a user.",
    "usage": [
        "pointat <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** points at **{target}** and says nothing."
    ],
    "cooldown": 2
});
