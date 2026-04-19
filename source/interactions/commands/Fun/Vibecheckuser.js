const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "vibecheckuser",
    "aliases": [
        "vibecheckuser"
    ],
    "title": "Vibe Check",
    "description": "Vibe Check a user.",
    "usage": [
        "vibecheckuser <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** runs a vibe check on **{target}**."
    ],
    "cooldown": 2
});
