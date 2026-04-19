const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "taunt",
    "aliases": [
        "taunt"
    ],
    "title": "Taunt",
    "description": "Taunt a user.",
    "usage": [
        "taunt <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** taunts **{target}** and waits for the comeback."
    ],
    "cooldown": 2
});
