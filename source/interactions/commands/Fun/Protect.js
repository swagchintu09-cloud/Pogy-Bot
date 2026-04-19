const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "protect",
    "aliases": [
        "protect"
    ],
    "title": "Protect",
    "description": "Protect a user.",
    "usage": [
        "protect <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** protects **{target}** from the nonsense."
    ],
    "cooldown": 2
});
