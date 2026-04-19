const { createGeneratedFunCommand } = require("./_generatedFactory");

module.exports = createGeneratedFunCommand({
    "mode": "target_action",
    "name": "facepalm",
    "aliases": [
        "facepalm"
    ],
    "title": "Facepalm",
    "description": "Facepalm a user.",
    "usage": [
        "facepalm <user>"
    ],
    "targetDescription": "The user to target.",
    "templates": [
        "**{actor}** facepalms at **{target}** in disbelief."
    ],
    "cooldown": 2
});
